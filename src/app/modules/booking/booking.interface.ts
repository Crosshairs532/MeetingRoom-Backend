import { Types } from 'mongoose'

export type isConfirm = 'confirmed' | 'unconfirmed' | 'canceled'

export type TBooking = {
  room: Types.ObjectId
  slots: Types.ObjectId[]
  user: Types.ObjectId
  date: Date
  totalAmount: number
  isConfirmed: isConfirm
  isDeleted: boolean
}
