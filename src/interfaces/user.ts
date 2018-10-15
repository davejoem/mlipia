export interface IUser {
  name: string
  username: string
  groups?: string[]
  role: string
  active: boolean
}