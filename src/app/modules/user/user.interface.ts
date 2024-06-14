/* eslint-disable no-unused-vars */
import { Model } from "mongoose"

export type TRoles = 'user' | 'admin'

export type TUser = {
  name: string
  email: string
  password: string
  phone: string
  address: string
  role: TRoles
}
export type adminParam = {
  email:string;
   role:string
}

export interface userStaticMethod extends Model<TUser> {
  isUser(email:string): boolean;
  isAdmin(email:adminParam): boolean;
}
