import { Rt, Route } from '../interfaces/interfaces'
import { Mlipia } from "../server"
import { Request, Response } from 'express'
import { resolve } from 'path'

export class AdminRoutes implements Route {
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
      address: '/admin'
      , func: (req: Request, res: Response) => {
        res.sendFile(resolve(__dirname, `..`, `views`, `admin`, `index.html`))
      }
      , method: 'get'
    })
  }
}