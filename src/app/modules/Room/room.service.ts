/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TRoom } from "./room.interface"
import { roomModel } from "./room.model"

const createRoomDb = async (roomData: TRoom) => {
    return await roomModel.create(roomData)
  }
const getSingleRoomDb= async(id:string)=>{
  const result = await roomModel.findById(id).select('-__v')
  return result

}
const getAllRoomDb= async() =>{
  try{
    const result = await roomModel.find().select('-__v');
    return result
  }
  catch(er){
    console.log(er)
  }

}
const updateRoomDb = async(id:string, payload:Partial<TRoom>)=>{
  const {amenities, ...remaining} = payload;
  // find existing room
  const existRoom = await roomModel.findById(id);

  //  update other documents except array documents;
  const basicUpdate = await roomModel.findByIdAndUpdate(id, remaining ,{
    new:true, 
    runValidators:true
  }).select('-__v')

  if(amenities && amenities.length>0  ){
    const  result = await roomModel.findByIdAndUpdate(id, {
      $addToSet:{amenities:{ $each: amenities} }
    }, {
      new:true,
      runValidators:true
    }).select('-__v')
    return  result;
  }
  return  basicUpdate;
}
  
export const roomService  = {
    createRoomDb,
    getSingleRoomDb,
    getAllRoomDb
    ,updateRoomDb
}