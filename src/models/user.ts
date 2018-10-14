import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import * as mongoose from 'mongoose'
import { Mlipia } from '../server'
import { IUser } from '../interfaces/user'

export class User extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia?: Mlipia) {
    super();
    this.mlipia = mlipia
  }

  public fetchModel(): ModelType<User> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }

  @prop()
  username?: string

  @prop()
  name: string

  @prop()
  groups?: typeof mongoose.Schema.Types.ObjectId[]

  @prop()
  role: string


  public create(data: IUser): Promise<User> {
    return new Promise((resolve, reject) => {
      let UserInstance = new User(this.mlipia).getModelForClass(User)
        , userModel = new UserInstance({
          username: data.username
          , name: data.name
          , groups: data.groups
        })
      userModel.save().then((user: User) => {
        resolve(user)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  public find(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.model.find().then((users: User[]) => {
        resolve(users)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

}

export const UserModel: ModelType<User> = new User().getModelForClass(User, {
  schemaOptions: { collection: `users` }
})
