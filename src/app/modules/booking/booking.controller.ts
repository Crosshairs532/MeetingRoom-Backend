import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsynch"
import { bookingService } from "./booking.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"
import AppError from "../../errors/AppError"

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

        if(!AllBookings){
            return sendResponse(res, {
                success:true,
                statusCode:404,
                message:"No Data Found",
                data: AllBookings
            })
        }
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
        // console.log({id});
        const data = req.body;
        const updatedBooking  = await bookingService.updateBookingDb(res,id, data)
        // if(!updatedBooking){
        //     return sendResponse(res, {
        //         success:false,
        //         statusCode:404,
        //         message:"No Data Found",
        //         data: updatedBooking === null ? [] : updatedBooking
        //     })
        // }
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
        const deleted = await bookingService.deleteBookingdb(res, id, data);
       if(!deleted){
            // return  sendResponse(res, {
            //     success:false,
            //     statusCode:404,
            //     message:"No Data Found",
            //     data:deleted == null? [] : deleted
            // })
            throw new AppError(404, "No Data Found")
       }
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