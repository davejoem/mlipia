import { Rt, Route } from 'interfaces/interfaces'
import { Mlipia } from "server"
import { Request, Response } from 'express'
import { resolve } from 'path'

export class ClientsRoutes implements Route {
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

  }

  public listen() {
    this.routes.forEach(route => {
      this.mlipia.app[route.method](route.address, route.func)
    })
  }

  private register(): void {
    this.routes.push({
      address: '/appointments/new'
      , func: (req: Request, res: Response) => {
        this.add(req, res)
      }
      , method: 'post'
    })
  }
}