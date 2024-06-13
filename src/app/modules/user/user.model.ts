import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'
import { userRoles } from './user.constants'

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'user name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: userRoles,
    },
  },
  {
    timestamps: true,
  },
)

export const userModel = model<TUser>('User', userSchema)
