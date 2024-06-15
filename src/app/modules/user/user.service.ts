import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TUser } from './user.interface'
import { userModel } from './user.model'
import { bookingModel } from '../booking/booking.model'

const createUserDb = async (userData: TUser) => {
  return await userModel.create(userData)
}

const getUserBookingsDb = async(payload:TUser)=>{
  // get the user 
  const { valid, data} = await userModel.isUser(payload.email);
  if(!valid){
    throw new AppError(404, "No Data found")
  }
  const booking = await bookingModel.find({user:data?._id}).populate({
    path:'room',
    select:'-__v'
  }).populate({
    path:'slots',
    select:'-__v'
  }).select(['-__v', '-user'])
  
  const mappedBook  = booking.map((book)=>
  {
    const {date, ...remaining} = book.toObject()
    const newDay  = new Date(date).getDate();
    const newMonth  = new Date(date).getMonth();
    const newYear  = new Date(date).getFullYear();
    const newDate = `${newYear}-${newMonth}-${newDay}`
    const newBooking  = {...remaining,date:newDate };
    return newBooking
  }
  )

  // return booking
  return mappedBook
  



}

export const userService = {
  createUserDb,
  getUserBookingsDb
}
