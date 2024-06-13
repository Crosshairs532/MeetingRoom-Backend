/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsynch";
import { roomService } from "./room.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { TRoom } from "./room.interface";

const createRoom = catchAsync(
    async(req:Request, res:Response)=>{
        const  responseData:Partial<TRoom> = {}
        const roomData = req.body;
        const roomResData = await roomService.createRoomDb(roomData);
        // const { __v,...responseData} = roomResData && roomResData;
        if(roomResData){
            responseData._id = roomResData._id
            responseData.name =roomResData.name 
            responseData.roomNo = roomResData.roomNo
            responseData.floorNo = roomResData.floorNo
            responseData.capacity = roomResData.capacity
            responseData.pricePerSlot = roomResData.pricePerSlot
            responseData.amenities = roomResData.amenities
            responseData.isDeleted = roomResData.isDeleted
        }
        sendResponse(res, {
            success:true,
            statusCode:httpStatus.OK,
            message:"Room added successfully",
            data:responseData
        })
    }
)

export const roomController  ={
    createRoom
}