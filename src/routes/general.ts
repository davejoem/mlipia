import { Rt, Route } from 'interfaces/interfaces'
import { Mlipia } from 'server'
import { Request, Response } from 'express'
import { resolve } from 'path'

export class GeneralRoutes implements Route {
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
      address: '/ip'
      , func: (req: Request, res: Response) => {
        res.status(200).send(JSON.stringify({ ip: req.headers['x-forwarded-for'] }))
      }
      , method: `get`
    })
    this.routes.push({
      address: `/`
      , func: (req: Request, res: Response) => {
        res.redirect('//' + req.headers.host + '/client')
        // res.sendFile(resolve(__dirname, `..`, `views`, `client`, `index.html`))
      }
      , method: `get`
    })
    this.routes.push({
      address: '/*'
      , func: (req: Request, res: Response) => {
        res.redirect('//' + req.headers.host)
      }
      , method: `get`
    })
  }
}