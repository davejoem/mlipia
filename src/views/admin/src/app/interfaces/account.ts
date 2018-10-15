import { ITransaction } from './interfaces'

export interface IAccount {
  name: string
  balance: number
  transactions?: ITransaction[]
  apiEnd?: string
}