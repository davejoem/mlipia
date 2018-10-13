import { Rt, Route } from '../interfaces/interfaces'
import { Mlipia } from "../server"
import { Request, Response } from 'express'

export class AuthRoutes implements Route {
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
      address: '/auth/signin'
      , func: (req: Request, res: Response) => {
        this.signIn(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/auth/token'
      , func: (req: Request, res: Response) => {
        this.getToken(req, res)
      }
      , method: 'post'
    })
  }

  private signIn(req: Request, res: Response) {
    res.status(200).send({ username: 'admin', role: 'admin' })
  }

  private getToken(req: Request, res: Response) {

  }
}