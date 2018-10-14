import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'

export class Client extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia?: Mlipia) {
    super()
    this.mlipia = mlipia
  }

  public fetchModel(): ModelType<Client> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }

  @prop({ required: true })
  idno: Number
  @prop({ required: true, default: 0 })
  mlipia_balance: Number
  @prop({ required: true })
  name: String
  @prop({ required: true })
  rating: Number
}

export const ClientModel: ModelType<Client> = new Client().getModelForClass(Client, {
  // existingMongoose: this.mlipia.mongoose,
  schemaOptions: { collection: 'clients' }
})
