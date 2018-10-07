import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Schema } from 'mongoose'
import { Mlipia } from '../server'
import { IGroup } from '../interfaces/group';
import { Promise } from 'es6-promise'

export class Group extends Typegoose {
  private model: any
  private mlipia: Mlipia

  constructor(mlipia: Mlipia) {
    super();
    this.mlipia = mlipia
    this.model = this.createModel()
  }

  public createModel() {
    this.getModelForClass(this)
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

// UserModel is a regular Mongoose Model with correct types
// (async () => {
//   const u = new GroupModel({ date: new Date(Date.now()) });
//   await u.save();
//   const user = await GroupModel.findOne();

//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log(user);
// })();