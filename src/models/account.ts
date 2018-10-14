import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose'
import { Mlipia } from '../server'
import { Transaction } from './models';

export class Account extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia?: Mlipia) {
    super()
    this.mlipia = mlipia ? mlipia : null
  }

  public fetchModel(): ModelType<Account> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }

  @prop({ required: true })
  name: String
  @prop({ required: true })
  balance: Number
  @prop({ required: true, default: [] })
  transactions: Ref<Transaction>[]

}

export const AccountModel: ModelType<Account> = new Account().getModelForClass(Account, {
  // existingMongoose: this.mlipia.mongoose,
  schemaOptions: { collection: 'accounts' }
})
