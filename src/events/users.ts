import { Mlipia } from 'server'
import { Ev, MlipiaEvent } from 'interfaces/interfaces'
import { User } from 'models/models'
import { Error as MError } from 'mongoose'

export class UsersEvents implements MlipiaEvent {
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
        , name: this.purview + ':' + `list`
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
  private list(cb: Function): Promise<User[]> {
    return new Promise((res, rej) => {
      this.mlipia.models.User.find()
        .then((users: User[]) => {
          this.end(res, cb, users)

        })
        .catch((err: MError) => {
          this.end(rej, cb, {
            message: "Couldn't list users"
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