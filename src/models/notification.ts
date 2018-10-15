import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose'
import * as mongoose from 'mongoose'
import { Mlipia } from '../server'
import { INotification } from '../interfaces/interfaces'
import { User } from './models';

export class Notification extends Typegoose {
  private mlipia: Mlipia

  constructor(mlipia?: Mlipia) {
    super();
    this.mlipia = mlipia
  }

  public fetchModel(): ModelType<Notification> {
    return this.getModelForClass(this)
  }

  get model() {
    return this.fetchModel()
  }

  @prop({ required: true })
  user: Ref<User>

  @prop({ required: true })
  message: String

  @prop({ required: true, default: false })
  read: Boolean


  public create(data: INotification): Promise<Notification> {
    return new Promise((resolve, reject) => {
      new NotificationModel(data).save().then((notification: Notification) => {
        resolve(notification)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  public find(): Promise<Notification[]> {
    return new Promise((resolve, reject) => {
      NotificationModel.find().then((notifications: Notification[]) => {
        resolve(notifications)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

}

export const NotificationModel: ModelType<Notification> = new Notification().getModelForClass(Notification, {
  schemaOptions: { collection: `notifications` }
})
