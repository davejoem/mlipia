import { IAccount, IClient, IUser } from './interfaces'

export interface ITransaction {
  account: IAccount
  amount: number
  approver: IUser
  client: IClient
  date: Date
  success?: boolean
}