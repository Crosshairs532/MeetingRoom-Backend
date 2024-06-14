import { Schema, model } from 'mongoose'
import { TUser, userStaticMethod } from './user.interface'
import { userRoles } from './user.constants'
// import AppError from '../../errors/AppError'
// import httpStatus from 'http-status'

const userSchema = new Schema<TUser, userStaticMethod>(
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
userSchema.statics.isUser = async function (email){
  const isUser = await userModel.findOne({email});
  return {
    valid:isUser?.email === email,
    data:isUser
  }; 
}
userSchema.statics.isAdmin = async function (admin){
  const isAdmin= await userModel.findOne(admin);
  return isAdmin
}




export const userModel = model<TUser, userStaticMethod>('User', userSchema)
