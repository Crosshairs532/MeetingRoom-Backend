import { path } from 'path';
import mongoose from "mongoose";
import { TFilter, TSlot } from "./slot.interface"
import { slotModel } from "./slot.model"
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createSlotDb = async(payload:TSlot)=>{
    // const newData = {isBooked:false, ...payload}
    const [payLoadStartTimeHour, payLoadStartTimeMin]  = payload.startTime.split(":").map((val)=> parseInt(val)) ;
    const [payloadEndTimeHour, payloadEndTimeMin]= payload.endTime.split(":").map((val)=> parseInt(val));

    const StartMinFromMidNight  = payLoadStartTimeHour*60 + payLoadStartTimeMin ;
    const EndMinFromMidNight = payloadEndTimeHour* 60 + payloadEndTimeMin; 
    const Duration = EndMinFromMidNight - StartMinFromMidNight ;
    const NumberOfSlots = Duration/60 ;
    const AllSlots = [];

    for(let i = 0 ; i< NumberOfSlots ; i++  ){


        const slot = 
        {
            room: payload.room,
            date:payload.date,
            startTime:`${(payLoadStartTimeHour+i).toString().padStart(2,'0')}:${payLoadStartTimeMin.toString().padStart(2,'0')}`,
            endTime:`${(payLoadStartTimeHour+i+1).toString().padStart(2,'0')}:${payloadEndTimeMin.toString().padStart(2,'0')}`,
            isBooked:false
        }
        AllSlots.push(slot)
    }


    const session = await mongoose.startSession();
    try{
        session.startTransaction()
        const  slots = await slotModel.create(AllSlots, {session});

        if(!slots || slots.length === 0){
            throw new AppError(httpStatus.BAD_REQUEST, "Unable to Create Slots !")
        }

        // find all the documents without __v property 
        const result = await slotModel.find().select("-__v")

        await session.commitTransaction()
        await session.endSession()

        return result
    
    }
    catch(err){

        await session.abortTransaction()
        await session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST, "Some is went wrong while creating slots!")

       
    }
    // create slot 

    
}

const getAllAvailableSlotsDb = async(date:string, roomId:string)=>{
    const newDate = new Date(date)
    // console.log({date:newDate, roomId});
    const filter:Partial<TFilter >  = {}
    if(date && roomId){
        filter.date = newDate
        filter.room = roomId 
    }
    else{
        filter.isBooked = false;
    }
    const availableSlots  = await  slotModel.find(filter).populate({
        path:"room",
        select:"-__v"
    }).select('-__v')
    return availableSlots

}
export const slotServices = {
    createSlotDb,
    getAllAvailableSlotsDb
}