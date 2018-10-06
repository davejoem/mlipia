import { Schema } from "mongoose";

export interface IGroup {
  name: string
  rights: string[]
  users?: typeof Schema.Types.ObjectId[]
}