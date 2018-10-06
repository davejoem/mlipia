import { Mlipia } from 'server'
import { Ev, MlipiaEvent, ILender } from 'interfaces/interfaces'
import { Lender } from 'models/models'
import { Error as MError } from 'mongoose'
import { MongoError } from 'mongodb';

export class LendersEvents implements MlipiaEvent {
  public events: Ev[]

  /**
   *
   */
  constructor(
    private mlipia: Mlipia
    , public purview: string
    , autolist?: boolean
  ) {
    this.events = []
    this.register().then(() => {
      if (autolist == true)
        this.listen()
    })
  }

  private add(data: ILender): Promise<Lender> {
    return new Promise((resolve, reject) => {
      new Lender(this.mlipia).create(data).then((lender: Lender) => {
        resolve(lender)
      }).catch((err: MongoError) => {
        reject(err)
      })
    })
  }

  private listen(): void {
    this.events.forEach(ev => {
      let event: string = this.purview + ':' + ev.name
      this.mlipia.socket.on(event, ev.func)
    })
  }

  private register(): Promise<any> {
    return Promise.resolve(() => {
      this.events.push({
        func: this.list
        , name: this.purview + ':' + `list`
      })
      this.events.push({
        func: this.add
        , name: this.purview + ':' + 'add'
      })
    })
  }

  public stopListening(): Promise<any> {
    return Promise.resolve(() => {
      this.events.forEach(ev => {
        let event: string = this.purview + ':' + ev.name
        this.mlipia.socket.off(event)
      })
    })
  }

  private list(cb: Function): Promise<Lender[]> {
    return new Promise((res, rej) => {
      this.mlipia.models.Lender.find()
        .exec()
        .then((lenders: Lender[]) => {
          this.end(res, cb, lenders)
        })
        .catch((err: MError) => {
          this.end(rej, cb, {
            message: 'Couldn\'t list lenders.'
            , error: err
          })
        })
    })
  }

  private end(end: Function, cb: Function, data: any) {
    end(data)
    cb(data)
  }
}