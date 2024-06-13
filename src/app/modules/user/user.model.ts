import { Schema } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, 'user name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
})
