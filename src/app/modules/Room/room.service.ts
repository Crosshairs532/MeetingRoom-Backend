import { TRoom } from "./room.interface"
import { roomModel } from "./room.model"

const createRoomDb = async (roomData: TRoom) => {
    return await roomModel.create(roomData)
  }
  
export const roomService  = {
    createRoomDb
}