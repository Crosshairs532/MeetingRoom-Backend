
import { TBooking } from "./booking.interface"
import { bookingModel } from "./booking.model"

const createBookingDb = async(payload:TBooking)=>{

    const result = await bookingModel.create(payload)
    return result
}
export const bookingService  = {
    createBookingDb
}