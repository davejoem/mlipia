import { Request, Response } from 'express'
import { MongoError } from 'mongodb'
import { Mlipia } from "../server"
import { Rt, Route } from '../interfaces/interfaces'
import { GroupModel, Group } from '../models/models'

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

  private add(req: Request, res: Response) {
    new GroupModel(req.body).save().then((group) => {
      console.log(group)
      res.status(200).send(group)
    }).catch((err: MongoError) => {
      console.log(err)
      res.status(400).send(err)
    })
  }

  private list(req: Request, res: Response): void {
    GroupModel.find().then((groups: InstanceType<any>[]) => {
      console.log(groups)
      res.status(200).send(groups)
    }).catch((err: MongoError) => {
      console.log(err)
      res.status(400).send(err)
    })
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
        this.add(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/groups/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
  }
}