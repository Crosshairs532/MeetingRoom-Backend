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

export const bookingController = {
    createBooking,
    getAllBookings
}