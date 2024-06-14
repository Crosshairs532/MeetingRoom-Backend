import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsynch"
import { bookingService } from "./booking.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"

const createBooking = catchAsync(
    async(req:Request, res:Response)=>{
        const bookingData = req.body;
        const result = await bookingService.createBookingDb(bookingData)
         sendResponse(res, {
            success:true,
            statusCode:httpStatus.OK,
            message:"Booking created successfully",
            data:result
        })
    })
const getAllBookings = catchAsync(
    async(req:Request, res:Response)=>{

        const AllBookings  = await bookingService.getAllBookingsDb();
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'User registered successfully',
            data: AllBookings,
          })
    }
)


const updateBooking = catchAsync(
    async(req:Request, res:Response)=>{
        const {id}= req.params;
        console.log({id});
        const data = req.body;
        const updatedBooking  = await bookingService.updateBookingDb(id, data)
        sendResponse(res, {
            success:true,
            statusCode:httpStatus.OK,
            message:"Booking updated successfully",
            data:updatedBooking
        })
    }
)

const deleteBooking = catchAsync(
    async(req:Request, res:Response)=>{
        const {id}= req.params;
        const data = req.body;
        const deleted = await bookingService.deleteBookingdb(id, data);
        sendResponse(res, {
            success:true,
            statusCode:httpStatus.OK,
            message:"Booking deleted successfully",
            data:deleted
        })

    }
)
export const bookingController = {
    createBooking,
    getAllBookings,
    updateBooking,
    deleteBooking
}