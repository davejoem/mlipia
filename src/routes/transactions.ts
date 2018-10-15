import { Request, Response } from 'express'
import { MongoError } from 'mongodb';
import { Mlipia } from "../server"
import { Rt, Route, ITransaction } from '../interfaces/interfaces'
import { TransactionModel } from '../models/models';

export class TransactionsRoutes implements Route {
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
    let newTransaction: InstanceType<any> = new TransactionModel(req.body)
    newTransaction.save().then((transaction: InstanceType<any>) => {
      res.status(200).send(transaction)
    }).catch((err: MongoError) => {
      res.status(400).send(err)
    })
  }

  private list(req: Request, res: Response): void {
    console.log(req.body)
    let sel: { success?: boolean }
    switch (req.body.select) {
      case `all`:
        sel = {}
        break
      case `successful`:
        sel = { success: true }
        break
      case `failed`:
        sel = { success: false }
    }
    TransactionModel.find(sel).then((transactions: InstanceType<any>[]) => {
      console.log(transactions)
      res.status(200).send(transactions)
    }).catch((err: MongoError) => {
      res.status(400).send(err)
      console.log(err)
    })
  }

  public listen() {
    this.routes.forEach(route => {
      this.mlipia.app[route.method](route.address, route.func)
    })
  }

  private register(): void {
    this.routes.push({
      address: '/transactions/new'
      , func: (req: Request, res: Response) => {
        this.add(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/transactions/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/transactions/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
  }
}