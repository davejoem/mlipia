import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import * as mongoose from 'mongoose'
import { Mlipia } from '../server'
import { IUser } from '../interfaces/user'

export class User extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia: Mlipia) {
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

// UserModel is a regular Mongoose Model with correct types
// (async () => {
//   const u = new AppointmentModel({ date: new Date(Date.now()) });
//   await u.save();
//   const user = await AppointmentModel.findOne();

//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log(user);
// })();