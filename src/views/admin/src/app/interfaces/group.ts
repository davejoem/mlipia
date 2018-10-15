import { Schema } from "mongoose";
import { IUser } from "./interfaces";

export interface IGroup {
  name: string
  rights?: string[]
  users?: {
    all?: IUser[]
    active?: IUser[]
    disabled?: IUser[]
  }
}