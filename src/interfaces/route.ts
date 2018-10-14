import { Mlipia } from '../server'

export interface Route {
  mlipia: Mlipia
}

export interface Rt {
  address: string
  func?: Function
  funcs?: Function[]
  method?: string
  methods?: string[]
  mw?: Function[]
}