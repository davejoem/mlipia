import { Request, Response } from 'express'
import { MongoError } from 'mongodb'

import { Mlipia } from "../server"
import { Rt, Route } from '../interfaces/interfaces'
import { Lender, LenderModel } from '../models/models'

export class LendersRoutes implements Route {
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

  private add(req: Request, res: Response) {
    new LenderModel(req.body).save().then((lender) => {
      console.log(lender)
      res.status(200).send(lender)
    }).catch((err: MongoError) => {
      console.log(err)
      res.status(400).send(err)
    })
  }

  private list(req: Request, res: Response): Lender[] {
    return new Array()
  }

  public listen() {
    this.routes.forEach(route => {
      this.mlipia.app[route.method](route.address, route.func)
    })
  }

  private register(): void {
    this.routes.push({
      address: '/lenders/add'
      , func: (req: Request, res: Response) => {
        this.add(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/lenders/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
  }

}