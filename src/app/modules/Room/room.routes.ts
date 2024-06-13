import { Router } from "express"
import { roomController } from "./room.controller";
import auth from "../../middleware/auth";
const route = Router();


route.post('', auth('admin'), roomController.createRoom )
route.get('/:id', roomController.getSingleRoom)
route.get('', roomController.getAllRoom)

export const roomRoutes = route