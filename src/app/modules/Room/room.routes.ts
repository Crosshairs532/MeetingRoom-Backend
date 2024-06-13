import { Router } from "express"
import { roomController } from "./room.controller";
import auth from "../../middleware/auth";
import { validation } from "../../middleware/validation";
import { roomValidation } from "./room.validation";
const route = Router();


route.post('', auth('admin'), validation(roomValidation.createRoomValidationSchema), roomController.createRoom )
route.get('/:id', roomController.getSingleRoom)
route.get('', roomController.getAllRoom)
route.patch('/:id', auth("admin"), validation(roomValidation.updateRoomValidationSchema), roomController.updateSingleDocument )
route.delete('/:id', auth("admin"), roomController.deleteSingleDocument)

export const roomRoutes = route