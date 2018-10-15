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
    let ret: any
    switch (req.body.username) {
      case 'kelvin' || 'manager':
        ret = { username: req.body.username, role: 'manager' }
        break
      case 'approver' || 'anthony':
        ret = { username: req.body.username, role: 'approver' }
        break
      case 'agent':
        ret = { username: req.body.username, role: 'agent' }
        break
      default:
        ret = { username: req.body.username, role: 'admin' }
    }
    res.status(200).send(ret)
  }

  private getToken(req: Request, res: Response) {

  }
}