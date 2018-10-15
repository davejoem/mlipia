import { ITransaction } from "./interfaces";

export interface ILender {
  name: string
  transactions?: ITransaction[]
}