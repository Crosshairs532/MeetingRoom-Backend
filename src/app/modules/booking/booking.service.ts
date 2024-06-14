/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */


import httpStatus from "http-status"
import AppError from "../../errors/AppError"
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateBookingDb = async(id:string , payload:Partial<TBooking>)=>{
    
    // get the required updated fields =
    const toUpdate = Object.keys(payload)

    // find the booking to be updated
    const booking  = await bookingModel.findById(id).lean();
    if(!booking){
        throw new AppError(httpStatus.NOT_FOUND,"Booking not found")
    }
    const copyBooking  = {...booking};

    // make copy of that booking    
    for (const i of Object.keys(booking)){
        if(toUpdate.includes(i)){
            delete copyBooking[i]
        }
    }
    // copy booking will contain that does not need to be updated.

    if(!payload?.slots?.length == 0 ){
        const arr=  booking.slots.map((id)=> (id.toString()))
        copyBooking.slots = [...payload?.slots, ...arr]
         delete payload.slots
    }
    const newBooking  = {...copyBooking , ...payload}
    
    // now update the newBooking
    const result = await bookingModel.findByIdAndUpdate(id, newBooking, {
        new:true, 
        upsert:true,
        runValidators:true
    })

    return result
    
}

const deleteBookingdb = async(id:string , payload:Partial<TBooking>)=>{
    const result = await bookingModel.findByIdAndUpdate(id, payload, {
    new:true,
    runValidators:true,
    upsert:true
    }).lean().select('-__v')
    return result
}
export const bookingService  = {
    createBookingDb, 
    getAllBookingsDb,
    updateBookingDb,
    deleteBookingdb
}