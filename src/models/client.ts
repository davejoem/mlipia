import { prop, Typegoose, ModelType, InstanceType } from 'typegoose'
import { Mlipia } from '../server'
import { Model } from 'mongoose';

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

export const ClientModel: ModelType<Client> = new Client().getModelForClass(Client)
