
import { TBooking } from "./booking.interface"
import { bookingModel } from "./booking.model"

const createBookingDb = async(payload:TBooking)=>{

    const result = await bookingModel.create(payload)

    const CreatedBooking = await bookingModel.findById((await result)._id).select('-__v').populate({
        path:'slots',
        select:"-__v"
    }) 
    return CreatedBooking
}

const getAllBookingsDb = async()=>{
    const result = await bookingModel.find().populate({
        path:'slots',
        select:"-__v"
    }).populate({
        path:'room',
        select:"-__v"
    }).populate({
        path:'user',
        select:['-__v', '-createdAt', '-updatedAt']
    }).select('-__v'); 

    return result
}
export const bookingService  = {
    createBookingDb, 
    getAllBookingsDb
}