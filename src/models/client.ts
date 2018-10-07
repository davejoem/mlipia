import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'
import { Promise } from 'es6-promise'

export class Client extends Typegoose {
  private model: any
  private mlipia: Mlipia

  constructor(mlipia: Mlipia) {
    super()
    this.mlipia = mlipia
    this.model = this.createModel()
  }

  public createModel() {
    this.getModelForClass(this)
  }

  @prop()
  date?: Date
  @prop()
  patient?: string
  @prop()
  doctor?: string
  @prop()
  department?: string

  public find(): any {

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