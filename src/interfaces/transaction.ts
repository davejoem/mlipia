import { IAccount, IClient } from './interfaces'

export interface ITransaction {
  account: IAccount
  amount: number
  approver: IAccount
  client: IClient
  success?: boolean
}