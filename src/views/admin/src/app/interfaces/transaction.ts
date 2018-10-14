import { IAccount, IClient } from './interfaces'

export interface ITransaction {
  amount: number
  account: IAccount
  client: IClient
  success?: boolean
}