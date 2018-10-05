import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'

export class Lender extends Typegoose {
  private model: any
  private mlipia: Mlipia
  /**
   *
   */
  constructor(mlipia: Mlipia) {
    super();
    this.mlipia = mlipia
    this.model = this.createModel()
  }
  
  public createModel() {
    this.getModelForClass(this)
  }

  @prop()
  date?: Date

  public find(): any {
  }

}

// UserModel is a regular Mongoose Model with correct types
// (async () => {
//   const u = new LenderModel({ date: new Date(Date.now()) });
//   await u.save();
//   const user = await LenderModel.findOne();

//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log(user);
// })();