import { Router } from "express"
import { roomController } from "./room.controller";
const route = Router();


route.post('', roomController.createRoom )

export const roomRoutes = route