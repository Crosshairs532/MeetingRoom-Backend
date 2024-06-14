import { Request } from './../../config/index.d';

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
export const bookingService  = {
    createBookingDb
}