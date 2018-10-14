import { Request, Response } from 'express'
import { MongoError } from 'mongodb';
import { Mlipia } from "../server"
import { Rt, Route } from '../interfaces/interfaces'
import { ClientModel } from '../models/models'

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

  private list(req: Request, res: Response): void {
    ClientModel.find().then((clients: InstanceType<any>[]) => {
      console.log(clients)
      res.status(200).send(clients)
    }).catch((err: MongoError) => {
      res.status(400).send(err)
    })
  }

  public listen() {
    this.routes.forEach(route => {
      if (route.methods) {
        if (Array.isArray(route.methods)) {
          route.methods.forEach((method: string, index: number) => {
            this.mlipia.app[method](route.address, Array.isArray(route.funcs) ? route.funcs[index] : route.func)
          })
        }
      } else {
        this.mlipia.app[route.method](route.address, route.func ? route.func : route.funcs[0])
      }
    })
  }

  private register(): void {
    this.routes.push({
      address: '/clients/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
    this.routes.push({
      address: '/clients/new'
      , func: (req: Request, res: Response) => {
        this.add(req, res)
      }
      , method: 'post'
    })
  }
}