
import * as cp from 'child_process'
import * as dns from 'dns'
import * as fs from 'fs-extra'
import * as http from 'http'
import * as https from 'https'
import * as os from 'os'
import * as path from 'path'

import * as args from 'argparse'
import * as bodyParser from "body-parser"
import * as compression from "compression"
import * as cookieParser from "cookie-parser"
import * as express from "express"
import * as helmet from 'helmet'
import * as mongoose from 'mongoose'
import * as mongodb from 'mongodb'
import opn = require('opn')
import * as io from 'socket.io'
import { ModelType } from 'typegoose'
import { Logger, LoggerInstance, transports } from 'winston'

import { ClientsEvents, GroupsEvents, LendersEvents, UsersEvents } from './events/events'
import { Account, AccountModel, Client, ClientModel, Group, GroupModel, Lender, LenderModel, Transaction, TransactionModel, User, UserModel } from './models/models'
import { AccountsRoutes, AdminRoutes, AuthRoutes, ClientRoutes, ClientsRoutes, GeneralRoutes, GroupsRoutes, LendersRoutes, TransactionsRoutes, UsersRoutes } from './routes/routes'

interface Config {

  appname?: string;
  database?: {
    pass: string
    user: string
    path: string
  }
  log?: {
    files: {
      debug: string
      error: string
      full: string
      info: string
      warn: string
      silly: string
      verbose: string
    }
  }
  port?: number
}
interface Conf {
  [prop: string]: Config
}

export class Mlipia {
  public app: {
    [method: string]: any
  } | any
  public config: Config
  public database: {
    conn: any
    connect_interval: any
    db: mongodb.MongoClient
    path: string
  }
  public env: string
  public events: {
    client: ClientsEvents
    , group: GroupsEvents
    , lender: LendersEvents
    , user: UsersEvents
  }
  public express: express.Express
  public helmet: helmet.Helmet
  public ip: string
  public logger: LoggerInstance
  public models: {
    Account: ModelType<Account>
    Client: ModelType<Client>
    , Group: ModelType<Group>
    , Lender: ModelType<Lender>
    , Transaction: ModelType<Transaction>
    , User: ModelType<User>
  }
  public mongoose: mongoose.Mongoose
  public opn: any
  public port: number
  public routes: {
    accounts: AccountsRoutes
    admin: AdminRoutes
    auth: AuthRoutes
    clients: ClientsRoutes
    client: ClientRoutes
    general: GeneralRoutes
    groups: GroupsRoutes
    lenders: LendersRoutes
    transactions: TransactionsRoutes
    users: UsersRoutes
  }
  public server: any
  public socket: any
  public status: {
    online: boolean
  }

  constructor() {
    this.config = {}
    this.env = process.env.NODE_ENV || 'dev';
    this.events = {
      client: null
      , group: null
      , lender: null
      , user: null
    }
    this.logger = null
    this.helmet = helmet
    this.models = {
      Account: null
      , Client: null
      , Group: null
      , Lender: null
      , Transaction: null
      , User: null
    }
    this.opn = opn
    this.routes = {
      accounts: null
      , admin: null
      , auth: null
      , client: null
      , clients: null
      , groups: null
      , lenders: null
      , general: null
      , transactions: null
      , users: null
    }
    this.status = {
      online: false
    }
    this.port = parseInt(process.env.PORT) || parseInt(process.env.C9_PORT) || parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8000
    this.ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || `127.0.0.1`
  }

  public checkOnlineStatus(): Promise<any> {
    return new Promise(resolve => {
      dns.resolve('www.google.com', (err: Error, array: any) => {
        if (err) {
          this.status.online = false
          resolve(false)
        } else {
          this.status.online = true
          resolve(true);
        }
      })
    })
  }

  private connectSockets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.events.client = new ClientsEvents(this, 'clients')
      this.events.group = new GroupsEvents(this, 'groups')
      this.events.lender = new LendersEvents(this, 'lenders')
      this.events.user = new UsersEvents(this, 'users')
      // this.utils.fn.sock(this)
      resolve()
    })
  }

  private connectToDatabase(database_pat: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.database.connect_interval = setInterval(() => {
        this.database.conn = mongoose.connect(database_pat, {
          autoReconnect: true
        })
        this.database.conn.then(() => {
          process.stdout.write(`Database connected\n`)
          // this.database.conn.on('open', () => {
          //   process.stdout.write('database opened\n')
          // })
          // this.database.conn.on('close', () => {
          //   process.stdout.write('database closed\n')
          // })
          // this.database.conn.on('connected', () => {
          //   process.stdout.write('database connected\n')
          // })
          // this.database.conn.on('disconnected', () => {
          //   process.stdout.write('database disconnected\n')
          // })
          // this.database.conn.on('error', () => {
          //   process.stdout.write('database error\n')
          // })
          clearInterval(this.database.connect_interval)
          resolve()
        }).catch((err: Error) => {
          process.stdout.write(`Couldn't connect database.\n`)
          // reject(err)
          resolve()
        }
        )
      }, 3000)
    })
  }

  private getDbPath(status: boolean): Promise<any> {
    this.database = {
      conn: null
      , connect_interval: null
      , db: null
      , path: ``
    }
    return new Promise((resolve, reject) => {
      let prefix = `mongodb://`
      if (process.env.OPENSHIFT_MONGODB_DB_USERNAME && process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        this.database.path += prefix + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@";
      }
      process.env.OPENSHIFT_MONGODB_DB_HOST
        ? this.database.path += process.env.OPENSHIFT_MONGODB_DB_HOST + ":"
        : this.database.path += "127.0.0.1:"
      process.env.OPENSHIFT_MONGODB_DB_PORT
        ? this.database.path += process.env.OPENSHIFT_MONGODB_DB_PORT
        : this.database.path += "27017"
      this.database.path += `/${this.config.appname}`
      process.env.NODE_ENV == 'dev'
        ? resolve(`${prefix}${this.database.path}`)
        : status == true
          ? resolve(`${prefix}${this.config.database.user}:${this.config.database.pass}@${this.config.database.path}/${this.config.appname}`)
          // ? resolve(`${prefix}${this.config.database.path}/${this.config.appname}`)
          : resolve(`${prefix}${this.database.path}`)
    })
  }

  private getLaunchConfig(): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readJSON(path.resolve(__dirname, `config.json`), (err, cfg) => {
        if (err) return reject(err)
        this.config = cfg
        var ArgumentParser = args.ArgumentParser;
        var parser = new ArgumentParser({
          version: '1.0.0',
          addHelp: true,
          description: this.config.appname
        });
        parser.addArgument(
          ['-n', '--appname'],
          {
            action: "store",
            type: "string",
            help: 'Name of the server. It controls the database to connect to and other settings.'
          }
        );
        parser.addArgument(
          ['-p', '--port'],
          {
            action: "store",
            type: "string",
            help: 'Port to launch server on'
          }
        );
        parser.addArgument(
          ['--database'],
          {
            action: "store",
            type: "string",
            help: `
              Name of the server. It controls the MongoDB database to connect to.
              If the line ends with a slash, then option [-n,--appname] must be provided.`
          }
        );
        parser.addArgument(
          ['-u', '--dbuser'],
          {
            action: "store",
            type: "string",
            help: `user of the provided database`
          }
        );
        parser.addArgument(
          ['-l', '--log'],
          {
            action: "store",
            choices: [`0`, `1`, `2`, `3`],
            type: "int",
            help: `Controls logging level`
          }
        );
        parser.addArgument(
          ['--dbpass'],
          {
            action: "store",
            type: "string",
            help: `Password for provided database user. Ignored if user isn't provided.`
          }
        );
        var arg = parser.parseArgs()
        Object.keys(arg).forEach(option => {
          if (option in this.config) {
            if (option === `database` && arg[option] && arg[option].endsWith(`/`) && !arg.appname) {
              reject(`Invalid database path. When ending your database path with a slash you must provide an app name with [-n, --appname] option.\nExiting\n`)
            }
            if (arg[option]) (this.config as Conf)[option] = arg[option]
          }
        })
        let config = this.config
        resolve(this.config)
      })
    })
  }
  public static launch(): Promise<typeof Mlipia> {
    return new Promise((resolve, reject) => {
      let mlipia = new Mlipia()
      mlipia.getLaunchConfig().then(config => {
        mlipia.setUpLogger().then(() =>
          mlipia.checkOnlineStatus().then(stat =>
            mlipia.getDbPath(stat).then(database_pat =>
              mlipia.connectToDatabase(database_pat).then(() =>
                mlipia.modelDatabase().then(() =>
                  mlipia.setUpServer().then((mlipia: Mlipia) =>
                    mlipia.connectSockets().then(() =>
                      mlipia.setUpRoutes().then((mlipia: Mlipia) => {
                        mlipia.startServer(mlipia.port)
                          .then(info => {
                            process.stderr.write(`\nServer started\n${info.message}`)
                            // mlipia.logger.log({ log: `\nServer started\n${info}`, info: info })

                          })
                          .catch(err => {
                            // mlipia.logger.log({ log: `\nCouldn't start server\n`, error: err })
                            if (err.code == 'EADDRINUSE') {
                              config.port++
                              mlipia.startServer(config.port)
                            }
                          })
                      }).catch(console.error)
                    ).catch(console.error)
                  ).catch(console.error)
                ).catch(console.error)
              ).catch(console.error)
            ).catch(console.error)
          )
        )
      }).catch(console.error)
      resolve(this)
    })
  }

  private modelDatabase(): Promise<any> {
    return Promise.resolve(() => {
      this.models = {
        Account: new Account(this).fetchModel() || AccountModel
        , Client: new Client(this).fetchModel() || ClientModel
        , Group: new Group(this).fetchModel() || GroupModel
        , Lender: new Lender(this).fetchModel() || LenderModel
        , Transaction: new Transaction(this).fetchModel() || TransactionModel
        , User: new User(this).fetchModel() || UserModel
      }
    })
  }

  private setUpLogger(): Promise<any> {
    var options = {
      file: {
        level: 'info',
        filename: path.resolve(__dirname, `logs`, `app.log`),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
      },
      console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
      },
    };
    const levels = {
      error: 0,
      warn: 1,
      info: 2,
      verbose: 3,
      debug: 4,
      silly: 5
    }
    return Promise.resolve(() => {
      this.logger = new Logger({
        level: 'verbose',
        // format: new log.format.json(),
        transports: [
          //
          // - Write to all logs with level `info` and below to `combined.log` 
          // - Write all logs error (and below) to `error.log`.
          new transports.Console(),
          new transports.File(options.file),
          new transports.File({ filename: path.resolve(this.config.log.files.error), level: 'error' }),
          new transports.File({ filename: path.resolve(this.config.log.files.debug), level: 'debug' }),
          new transports.File({ filename: path.resolve(this.config.log.files.info), level: 'info' }),
          new transports.File({ filename: path.resolve(this.config.log.files.silly), level: 'silly' }),
          new transports.File({ filename: path.resolve(this.config.log.files.verbose), level: 'verbose' }),
          new transports.File({ filename: path.resolve(this.config.log.files.warn), level: 'warn' }),
          new transports.File({ filename: path.resolve(this.config.log.files.full) })
        ],
        exitOnError: false, // do not exit on handled exceptions
      });

      //
      // If we're not in production then log to the `console` with the format:
      // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
      // 
      if (process.env.NODE_ENV !== 'production') {
        this.logger.add(new transports.Console({
          // format: require('winston').format.simple()
        }));
      }
    })
  }

  private setUpRoutes(): Promise<any> {
    return new Promise((resolve, reject) => {
      // app.set('view engine','ejs')
      // app.engine('html', ejs.renderFile);
      // this.app.use(winston('dev'))
      // this.app.use(this.helmet({
      //   referrerPolicy: true
      //   , noCache: true
      //   // , hpkp: true
      // }))
      // parse application/json
      this.app.use(bodyParser.json())
      // parse application/x-www-form-urlencoded
      this.app.use(bodyParser.urlencoded({ extended: true }))
      this.app.use(compression({ threshold: 1024 }))
      this.app.all('*', (req: express.Request, res: express.Response, next: any) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
      })
      this.app.use('/', (req: express.Request, res: express.Response, next: Function) => {
        process.stdout.write(`${req.method.toUpperCase()}  ${req.path}\n`)
        next()
      })
      this.app.use('/administration', express.static(path.join(__dirname, `views`, `admin`), { maxAge: '30s' }))
      this.app.use('/admin', express.static(path.join(__dirname, `views`, `admin`), { maxAge: '30s' }))
      this.app.use('/client', express.static(path.join(__dirname, `views`, `client`), { maxAge: '30s' }))
      this.app.use('/', express.static(path.join(__dirname, `views`, `admin`), { maxAge: '30s' }))

      this.routes.accounts = new AccountsRoutes(this)
      this.routes.auth = new AuthRoutes(this)
      this.routes.clients = new ClientsRoutes(this)
      this.routes.groups = new GroupsRoutes(this)
      this.routes.lenders = new LendersRoutes(this)
      this.routes.transactions = new TransactionsRoutes(this)
      this.routes.users = new UsersRoutes(this)
      this.routes.admin = new AdminRoutes(this)
      this.routes.client = new ClientRoutes(this)
      this.routes.general = new GeneralRoutes(this)
      resolve(this)
    })
  }

  private setUpServer(): Promise<Mlipia> {
    return new Promise((resolve, reject) => {
      this.app = express()
      this.server = http.createServer(this.app)
      this.socket = io.listen(this.server)
      resolve(this)
    })
  }

  private startServer(port?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.server.listen(port ? port : this.port, () => {
        let addr = this.server.address()
        console.log(process.env.NODE_ENV)
        let opened = false
        if (process.env.NODE_ENV == 'dev' && !opened) {
          process.stdout.write(`Opening browser at http://localhost:${addr.port}/admin`)
          opened = true
          opn(`http://localhost:${addr.port}/admin`)
            .then((success: any) => {

            })
            .catch((err: any) => {
              process.stdout.write(`Couldn't launch browser`)
            })
          process.stdout.write(`Opening browser at http://localhost:${addr.port}`)
          opened = true
          opn(`http://localhost:${addr.port}`)
            .then((success: any) => {

            })
            .catch((err: any) => {
              process.stdout.write(`Couldn't launch browser`)
            })
        }
        resolve({ message: `\n${this.config.appname} running on ${addr.address}:${addr.port}\n`, address: addr })
      }).on('error', (err: Error) => {
        reject(err)
      })
    })
  }
}

Mlipia.launch()