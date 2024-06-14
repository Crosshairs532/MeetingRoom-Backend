import { TSlot } from "./slot.interface"
import { slotModel } from "./slot.model"

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

    console.log(AllSlots)

    
    // create slot 
    const  slots = await slotModel.create(AllSlots);

    // find all the documents without __v property 
    const result = await slotModel.find().select("-__v")
    return result

    
}
export const slotServices = {
    createSlotDb
}