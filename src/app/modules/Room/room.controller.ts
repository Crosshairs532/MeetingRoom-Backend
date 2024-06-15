/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsynch";
import { roomService } from "./room.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { TRoom } from "./room.interface";
import AppError from "../../errors/AppError";

const createRoom = catchAsync(
    async(req:Request, res:Response)=>{
        const  responseData:Partial<TRoom> = {}
        const roomData = req.body;
        const roomResData = await roomService.createRoomDb(roomData);
        if(roomResData){
            responseData._id = roomResData._id
            responseData.name =roomResData.name 
            responseData.roomNo = roomResData.roomNo
            responseData.floorNo = roomResData.floorNo
            responseData.capacity = roomResData.capacity
            responseData.pricePerSlot = roomResData.pricePerSlot
            responseData.amenities = roomResData.amenities
            responseData.isDeleted = roomResData.isDeleted
          return sendResponse(res, {
                success:true,
                statusCode:httpStatus.OK,
                message:"Room added successfully",
                data:responseData
            })
        }

    }
)

const getSingleRoom = catchAsync(
    async(req:Request, res:Response)=>{
        const {id} = req.params;
        const singleData = await roomService.getSingleRoomDb(id);
        if(!singleData){
            throw new AppError(404, "No Data Found")
        }
        sendResponse(res, {
            success:true,
            statusCode:httpStatus.OK,
            message:"Room retrieved successfully",
            data: singleData
        })
    }
)

const getAllRoom = catchAsync(
    async(req:Request, res:Response)=>{
        const AllRoomData = await roomService.getAllRoomDb();
       if(!AllRoomData){
        return sendResponse(res, {
            success:true,
            statusCode:404,
            message:"No Data Found",
            data: AllRoomData
        })
       }
       sendResponse(res, {
        success:true,
        statusCode:httpStatus.OK,
        message:"Room retrieved successfully",
        data: AllRoomData
    })
    }
)

const updateSingleDocument = catchAsync(
    async(req:Request, res:Response)=>{
        const {id}= req.params;
        const updateData = req.body;
   
        const updatedData = await roomService.updateRoomDb(id, updateData);
        // if(!updateData){
        //     return sendResponse(res, {
        //         success:true,
        //         statusCode:404,
        //         message:"No Data Found",
        //         data: updateData
        //     })
        // }
        sendResponse(res, {
            success:true,
            statusCode: httpStatus.OK,
            message:"Room updated successfully",
            data: updatedData
        })
    }
)

const deleteSingleDocument = catchAsync(
    async(req:Request, res:Response)=>{
        const {id} = req.params;
        const deleted = await roomService.deleteRoomDb(id);
        // if(!deleted){
        //     return sendResponse(res, {
        //         success:true,
        //         statusCode:404,
        //         message:"No Data Found",
        //         data: deleted
        //     })
        // }
        sendResponse(res, {
            success:true,
            statusCode:httpStatus.OK,
            message:"Room deleted successfully",
            data: deleted
        })
    }
)

export const roomController  ={
    createRoom,
    getSingleRoom,
    getAllRoom,
    updateSingleDocument,
    deleteSingleDocument
}