import { Schema, model } from 'mongoose'
import { TRoom } from './room.interface'

const RoomSchema = new Schema<TRoom>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  roomNo: {
    type: Number,
    required: true,
    unique: true,
  },
  floorNo: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  pricePerSlot: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
},{
  strict:true
})

export const roomModel = model<TRoom>('Room', RoomSchema)
