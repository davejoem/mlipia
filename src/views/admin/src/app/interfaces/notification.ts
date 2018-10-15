import { IUser } from './interfaces'

export interface INotification {
  user: IUser
  read: boolean
  message: string
}