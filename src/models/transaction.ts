import { prop, Typegoose, Ref, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'
import { Account, Client, User } from './models'

export class Transaction extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia?: Mlipia) {
    super()
    this.mlipia = mlipia ? mlipia : null
  }

  public fetchModel(): ModelType<Transaction> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }

  @prop({ required: true, default: Date.now() })
  date: Date

  @prop({ ref: Account, required: true })
  account: Ref<Account>

  @prop({ required: true })
  amount: Number

  @prop({ ref: User, required: true })
  approver: Ref<User>

  @prop({ ref: Client, required: true })
  client: Ref<Client>

  @prop({ required: false })
  success?: Boolean

}

export const TransactionModel: ModelType<Transaction> = new Transaction().getModelForClass(Transaction, {
  // existingMongoose: this.mlipia.mongoose,
  schemaOptions: { collection: 'transactions' }
})
