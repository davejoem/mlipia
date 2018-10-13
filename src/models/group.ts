import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Schema } from 'mongoose'
import { Mlipia } from '../server'
import { IGroup } from '../interfaces/group'

export class Group extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia?: Mlipia) {
    super();
    this.mlipia = mlipia
  }

  public fetchModel(): ModelType<Group> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }
  @prop()
  name: string

  @prop()
  rights: string[]

  @prop()
  users: typeof Schema.Types.ObjectId[]

  public create(data: IGroup): Promise<Group> {
    return new Promise((resolve, reject) => {
      let LenderInstance = new Group(this.mlipia).getModelForClass(Group)
        , lenderModel = new LenderInstance({
          name: data.name
        })
      lenderModel.save().then((lender: Group) => {
        resolve(lender)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
  public find(): any {

  }

}

export const GroupModel: ModelType<Group> = new Group().getModelForClass(Group)
