import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsynch"
import { slotServices } from "./slot.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";


const createSlot = catchAsync(
async(req:Request, res:Response)=>{
    const slotData = req.body;
    const result = await slotServices.createSlotDb(slotData);

    sendResponse(res, {
        success:true,
        statusCode:httpStatus.OK,
        message:"Slots created successfully",
        data: result
    })
}
)
export const slotController = {
    createSlot
}