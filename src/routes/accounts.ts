import { Request, Response } from 'express'
import { MongoError } from 'mongodb';
import { Mlipia } from "../server"
import { Rt, Route } from '../interfaces/interfaces'
import { AccountModel } from '../models/models';

export class AccountsRoutes implements Route {
  // private asd: Asd
  public routes: Rt[]
  mlipia: Mlipia

  /**
   *
   */
  constructor(mlipia: Mlipia) {
    this.routes = []
    this.mlipia = mlipia
    this.register()
    this.listen()
  }

  private add(req: Request, res: Response): void {
    let newAccount: InstanceType<any> = new AccountModel(req.body)
    newAccount.save().then((account: InstanceType<any>) => {
      res.status(200).send(account)
    }).catch((err: MongoError) => {
      res.status(400).send(err)
    })
  }

  private list(req: Request, res: Response): void {
    AccountModel.find().then((accounts: InstanceType<any>[]) => {
      res.status(200).send(accounts)
    }).catch((err: MongoError) => {
      res.status(400).send(err)
    })
  }

  public listen(): void {
    this.routes.forEach(route => {
      this.mlipia.app[route.method](route.address, route.func)
    })
  }

  private register(): void {
    this.routes.push({
      address: '/accounts/new'
      , func: (req: Request, res: Response) => {
        this.add(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/accounts/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
  }
}