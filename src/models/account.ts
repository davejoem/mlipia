import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'

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

export const AccountModel: ModelType<Account> = new Account().getModelForClass(Account)
