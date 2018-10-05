import { Rt, Route } from 'interfaces/interfaces'
import { Mlipia } from "server"
import { Request, Response } from 'express'
import { resolve } from 'path'

export class GroupsRoutes implements Route {
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
      address: '/groups/add'
      , func: (req: Request, res: Response) => {

      }
      , method: 'post'
    })
  }
}