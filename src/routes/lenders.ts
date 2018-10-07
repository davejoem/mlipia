import { Rt, Route } from '../interfaces/interfaces'
import { Lender } from '../models/models'
import { Mlipia } from "../server"
import { Request, Response } from 'express'

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

  public listen() {
    this.routes.forEach(route => {
      this.mlipia.app[route.method](route.address, route.func)
    })
  }

  private register(): void {
    this.routes.push({
      address: '/lenders/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
  }

  private list(req: Request, res: Response): Lender[] {
    return new Array()
  }
}