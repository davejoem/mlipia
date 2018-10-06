import { Mlipia } from 'server'
import { Ev, MlipiaEvent, IGroup } from 'interfaces/interfaces'
import { Group } from '../models/models'
import { Error as MError } from 'mongoose'
import { MongoError } from 'mongodb';

export class GroupsEvents implements MlipiaEvent {
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

  private add(data: IGroup): Promise<Group> {
    return new Promise((resolve, reject) => {
      new Group(this.mlipia).create(data).then((lender: Group) => {
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

  private list(cb: Function): Promise<Group[]> {
    return new Promise((res, rej) => {
      this.mlipia.models.Group.find()
        .exec()
        .then((groups: Group[]) => {
          this.end(res, cb, groups)
        })
        .catch((err: MError) => {
          this.end(rej, cb, {
            message: 'Couldn\'t list groups.'
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