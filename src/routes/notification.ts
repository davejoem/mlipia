import { Request, Response } from 'express'
import { MongoError } from 'mongodb'
import { Mlipia } from "../server"
import { Rt, Route } from '../interfaces/interfaces'
import { NotificationModel, Notification } from '../models/models'

export class NotificationsRoutes implements Route {
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
    new NotificationModel(req.body).save().then((notification) => {
      console.log(notification)
      res.status(200).send(notification)
    }).catch((err: MongoError) => {
      console.log(err)
      res.status(400).send(err)
    })
  }

  private list(req: Request, res: Response): void {
    NotificationModel.find({ user: req.body.user }).then((notifications: InstanceType<any>[]) => {
      console.log(notifications)
      res.status(200).send(notifications)
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
      address: '/notifications/add'
      , func: (req: Request, res: Response) => {
        this.add(req, res)
      }
      , method: 'post'
    })
    this.routes.push({
      address: '/notifications/list'
      , func: (req: Request, res: Response) => {
        this.list(req, res)
      }
      , method: 'get'
    })
  }
}