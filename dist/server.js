"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dns = require("dns");
const fs = require("fs-extra");
const http = require("http");
const path = require("path");
const args = require("argparse");
const bodyParser = require("body-parser");
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const opn = require("opn");
const io = require("socket.io");
const winston_1 = require("winston");
const events_1 = require("./events/events");
const models_1 = require("./models/models");
const routes_1 = require("./routes/routes");
class Mlipia {
    constructor() {
        this.config = {};
        this.env = process.env.NODE_ENV || 'dev';
        this.events = {
            client: null,
            group: null,
            lender: null,
            user: null
        };
        this.logger = null;
        this.helmet = helmet;
        this.models = {
            Client: null,
            Group: null,
            Lender: null,
            User: null
        };
        this.opn = opn;
        this.routes = {
            admin: null,
            client: null,
            clients: null,
            groups: null,
            lenders: null,
            general: null,
            users: null
        };
        this.status = {
            online: false
        };
        this.port = parseInt(process.env.PORT) || parseInt(process.env.C9_PORT) || parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8000;
        this.ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || `127.0.0.1`;
    }
    checkOnlineStatus() {
        return new Promise(resolve => {
            dns.resolve('www.google.com', (err, array) => {
                if (err) {
                    this.status.online = false;
                    resolve(false);
                }
                else {
                    this.status.online = true;
                    resolve(true);
                }
            });
        });
    }
    connectSockets() {
        return new Promise((resolve, reject) => {
            this.events.client = new events_1.ClientsEvents(this, 'clients');
            this.events.group = new events_1.GroupsEvents(this, 'groups');
            this.events.lender = new events_1.LendersEvents(this, 'lenders');
            this.events.user = new events_1.UsersEvents(this, 'users');
            // this.utils.fn.sock(this)
            resolve();
        });
    }
    connectToDatabase(database_pat) {
        return new Promise((resolve, reject) => {
            this.database.connect_interval = setInterval(() => {
                this.database.conn = mongoose.connect(database_pat, {
                    autoReconnect: true
                });
                this.database.conn.then(() => {
                    process.stdout.write(`Database connected\n`);
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
                    clearInterval(this.database.connect_interval);
                    resolve();
                }).catch((err) => {
                    process.stdout.write(`Couldn't connect database.\n`);
                    // reject(err)
                    resolve();
                });
            }, 3000);
        });
    }
    getDbPath(status) {
        this.database = {
            conn: null,
            connect_interval: null,
            db: null,
            path: ``
        };
        return new Promise((resolve, reject) => {
            let prefix = `mongodb://`;
            if (process.env.OPENSHIFT_MONGODB_DB_USERNAME && process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
                this.database.path += prefix + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@";
            }
            process.env.OPENSHIFT_MONGODB_DB_HOST
                ? this.database.path += process.env.OPENSHIFT_MONGODB_DB_HOST + ":"
                : this.database.path += "127.0.0.1:";
            process.env.OPENSHIFT_MONGODB_DB_PORT
                ? this.database.path += process.env.OPENSHIFT_MONGODB_DB_PORT
                : this.database.path += "27017";
            this.database.path += `/${this.config.appname}`;
            status == true
                ? resolve(`${prefix}${this.config.database.user}:${this.config.database.pass}@${this.config.database.path}/${this.config.appname}`)
                // ? resolve(`${prefix}${this.config.database.path}/${this.config.appname}`)
                : resolve(`${prefix}${this.database.path}`);
        });
    }
    getLaunchConfig() {
        return new Promise((resolve, reject) => {
            fs.readJSON(path.resolve(__dirname, `config.json`), (err, cfg) => {
                if (err)
                    return reject(err);
                this.config = cfg;
                var ArgumentParser = args.ArgumentParser;
                var parser = new ArgumentParser({
                    version: '1.0.0',
                    addHelp: true,
                    description: this.config.appname
                });
                parser.addArgument(['-n', '--appname'], {
                    action: "store",
                    type: "string",
                    help: 'Name of the server. It controls the database to connect to and other settings.'
                });
                parser.addArgument(['-p', '--port'], {
                    action: "store",
                    type: "string",
                    help: 'Port to launch server on'
                });
                parser.addArgument(['--database'], {
                    action: "store",
                    type: "string",
                    help: `
              Name of the server. It controls the MongoDB database to connect to.
              If the line ends with a slash, then option [-n,--appname] must be provided.`
                });
                parser.addArgument(['-u', '--dbuser'], {
                    action: "store",
                    type: "string",
                    help: `user of the provided database`
                });
                parser.addArgument(['-l', '--log'], {
                    action: "store",
                    choices: [`0`, `1`, `2`, `3`],
                    type: "int",
                    help: `Controls logging level`
                });
                parser.addArgument(['--dbpass'], {
                    action: "store",
                    type: "string",
                    help: `Password for provided database user. Ignored if user isn't provided.`
                });
                var arg = parser.parseArgs();
                Object.keys(arg).forEach(option => {
                    if (option in this.config) {
                        if (option === `database` && arg[option] && arg[option].endsWith(`/`) && !arg.appname) {
                            reject(`Invalid database path. When ending your database path with a slash you must provide an app name with [-n, --appname] option.\nExiting\n`);
                        }
                        if (arg[option])
                            this.config[option] = arg[option];
                    }
                });
                let config = this.config;
                resolve(this.config);
            });
        });
    }
    static launch() {
        return new Promise((resolve, reject) => {
            let mlipia = new Mlipia();
            mlipia.getLaunchConfig().then(config => {
                mlipia.setUpLogger().then(() => mlipia.checkOnlineStatus().then(stat => mlipia.getDbPath(stat).then(database_pat => mlipia.connectToDatabase(database_pat).then(() => mlipia.modelDatabase().then(() => mlipia.setUpServer().then((mlipia) => mlipia.connectSockets().then(() => mlipia.setUpRoutes().then((mlipia) => {
                    mlipia.startServer(mlipia.port)
                        .then(info => {
                        process.stderr.write(`\nServer started\n${info.message}`);
                        // mlipia.logger.log({ log: `\nServer started\n${info}`, info: info })
                    })
                        .catch(err => {
                        // mlipia.logger.log({ log: `\nCouldn't start server\n`, error: err })
                        if (err.code == 'EADDRINUSE') {
                            config.port++;
                            mlipia.startServer(config.port);
                        }
                    });
                }).catch(console.error)).catch(console.error)).catch(console.error)).catch(console.error)).catch(console.error)).catch(console.error)));
            }).catch(console.error);
            resolve(this);
        });
    }
    modelDatabase() {
        return Promise.resolve(() => {
            this.models = {
                Client: new models_1.Client(this),
                Group: new models_1.Group(this),
                Lender: new models_1.Lender(this),
                User: new models_1.User(this)
            };
        });
    }
    setUpLogger() {
        var options = {
            file: {
                level: 'info',
                filename: path.resolve(__dirname, `logs`, `app.log`),
                handleExceptions: true,
                json: true,
                maxsize: 5242880,
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
        };
        return Promise.resolve(() => {
            this.logger = new winston_1.Logger({
                level: 'verbose',
                // format: new log.format.json(),
                transports: [
                    //
                    // - Write to all logs with level `info` and below to `combined.log` 
                    // - Write all logs error (and below) to `error.log`.
                    new winston_1.transports.Console(),
                    new winston_1.transports.File(options.file),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.error), level: 'error' }),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.debug), level: 'debug' }),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.info), level: 'info' }),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.silly), level: 'silly' }),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.verbose), level: 'verbose' }),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.warn), level: 'warn' }),
                    new winston_1.transports.File({ filename: path.resolve(this.config.log.files.full) })
                ],
                exitOnError: false,
            });
            //
            // If we're not in production then log to the `console` with the format:
            // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
            // 
            if (process.env.NODE_ENV !== 'production') {
                this.logger.add(new winston_1.transports.Console({
                // format: require('winston').format.simple()
                }));
            }
        });
    }
    setUpRoutes() {
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
            this.app.use(bodyParser.json());
            // parse application/x-www-form-urlencoded
            this.app.use(bodyParser.urlencoded({ extended: true }));
            this.app.use(compression({ threshold: 1024 }));
            this.app.all('*', (req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });
            this.app.use('/', (req, res, next) => {
                process.stdout.write(`${req.method.toUpperCase()}  ${req.path}\n`);
                next();
            });
            this.app.use('/administration', express.static(path.join(__dirname, `views`, `admin`), { maxAge: '30s' }));
            this.app.use('/admin', express.static(path.join(__dirname, `views`, `admin`), { maxAge: '30s' }));
            this.app.use('/app', express.static(path.join(__dirname, `views`, `app`), { maxAge: '30s' }));
            this.app.use('/client', express.static(path.join(__dirname, `views`, `client`), { maxAge: '30s' }));
            this.app.use('/', express.static(path.join(__dirname, `views`, `client`), { maxAge: '30s' }));
            this.routes.admin = new routes_1.AdminRoutes(this);
            this.routes.client = new routes_1.ClientRoutes(this);
            this.routes.clients = new routes_1.ClientsRoutes(this);
            this.routes.groups = new routes_1.GroupsRoutes(this);
            this.routes.lenders = new routes_1.LendersRoutes(this);
            this.routes.users = new routes_1.UsersRoutes(this);
            this.routes.general = new routes_1.GeneralRoutes(this);
            resolve(this);
        });
    }
    setUpServer() {
        return new Promise((resolve, reject) => {
            this.app = express();
            this.server = http.createServer(this.app);
            this.socket = io.listen(this.server);
            resolve(this);
        });
    }
    startServer(port) {
        return new Promise((resolve, reject) => {
            this.server.listen(port ? port : this.port, () => {
                let addr = this.server.address();
                console.log(process.env.NODE_ENV);
                let opened = false;
                if (process.env.NODE_ENV == 'dev' && !opened) {
                    process.stdout.write(`Opening browser at http://localhost:${addr.port}`);
                    opened = true;
                    opn(`http://localhost:${addr.port}`)
                        .then((success) => {
                    })
                        .catch((err) => {
                        process.stdout.write(`Couldn't launch browser`);
                    });
                }
                resolve({ message: `\n${this.config.appname} running on ${addr.address}:${addr.port}\n`, address: addr });
            }).on('error', (err) => {
                reject(err);
            });
        });
    }
}
exports.Mlipia = Mlipia;
Mlipia.launch();
//# sourceMappingURL=server.js.map