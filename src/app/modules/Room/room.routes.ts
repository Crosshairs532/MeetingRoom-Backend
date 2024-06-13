import { Router } from "express"
import { roomController } from "./room.controller";
import auth from "../../middleware/auth";
const route = Router();


route.post('', auth('admin'), roomController.createRoom )

export const roomRoutes = route