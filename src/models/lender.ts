import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'
import { ILender } from 'interfaces/lender';

export class Lender extends Typegoose {
  private mlipia: Mlipia
  /**
   *
   */
  constructor(mlipia: Mlipia) {
    super();
    this.mlipia = mlipia
  }

  public fetchModel(): ModelType<Lender> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }

  @prop()
  date?: Date

  public find(): any {
  }

  public create(data: ILender): Promise<Lender> {
    return new Promise((resolve, reject) => {
      let LenderInstance = new Lender(this.mlipia).getModelForClass(Lender)
        , lenderModel = new LenderInstance({
          name: data.name
        })
      lenderModel.save().then((lender: Lender) => {
        resolve(lender)
      }).catch((err: any) => {
        reject(err)
      })
    })
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