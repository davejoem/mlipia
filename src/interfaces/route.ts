import { Mlipia } from 'server'

export interface Route {
  mlipia: Mlipia
}

export interface Rt {
  address: string
  func: Function
  method: string
  mw?: Function[]
}