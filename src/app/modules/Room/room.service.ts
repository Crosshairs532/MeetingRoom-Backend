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
  
export const roomService  = {
    createRoomDb,
    getSingleRoomDb,
    getAllRoomDb
}