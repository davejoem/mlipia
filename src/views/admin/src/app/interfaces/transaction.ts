import { IAccount } from './interfaces'

export interface ITransaction {
  amount: number
  account: IAccount
}