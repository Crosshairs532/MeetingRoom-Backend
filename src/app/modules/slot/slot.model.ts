import { Schema, model } from 'mongoose'
import { TSlot } from './slot.interface'

const slotSchema = new Schema<TSlot>({
  room: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  isBooked: {
    type: Boolean,
    required: true,
    default: false,
  },
})

export const slotModel = model<TSlot>('slot', slotSchema)
