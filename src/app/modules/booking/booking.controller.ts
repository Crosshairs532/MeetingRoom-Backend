import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsynch"
import { bookingModel } from "./booking.model"
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


export const bookingController = {
    createBooking
}