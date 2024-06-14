import { Router } from "express"
import auth from "../../middleware/auth";
import { validation } from "../../middleware/validation";
import { slotValidation } from "./slot.validation";
import { slotController } from "./slot.controller";

const routes = Router();

routes.post('/', auth("admin"), validation(slotValidation.createSlotValidationSchema), slotController.createSlot )
routes.get('/availability', slotController.getAllAvailableSlots)

export const slotRoutes = routes