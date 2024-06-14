import { Schema, model } from 'mongoose'
import { TBooking } from './booking.interface'
import { bookingConfirm } from './booking.constant'

const BookingSchema = new Schema<TBooking>({
  room: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Room',
  },
  slots: {
    type: [Schema.Types.ObjectId],
    ref: 'Slot',
    required: true,
  },
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    default:200
  },
  isConfirmed: {
    type: String,
    enum: {
      values: bookingConfirm,
      message: '{VALUES} is not a valid status',
    },
    default:'unconfirmed'
    // required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
})



export const bookingModel = model<TBooking>('booking', BookingSchema)
