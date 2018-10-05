import { Mlipia } from 'server'
import { Ev, MlipiaEvent } from 'interfaces/interfaces'
import { User, Client } from 'models/models'
import { Error as MError } from 'mongoose'
import { resolve } from 'path';

export class ClientsEvents implements MlipiaEvent {
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
        , name: this.purview + ':' + this.purview + ':' + `list`
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

  private list(cb: Function): Promise<Client[]> {
    return new Promise((res, rej) => {
      // find client from database
      this.mlipia.models.Client.find()
        .exec()
        .then((appointments: Client[]) => {
          this.end(res, cb, appointments)

        })
        .catch((err: MError) => {
          this.end(rej, cb, {
            message: "Couldn't list clients."
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