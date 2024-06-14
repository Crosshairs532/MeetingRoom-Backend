
import auth from "../../middleware/auth";
import { bookingController } from "./booking.controller";
import { validation } from "../../middleware/validation";
import { bookingValidation } from "./booking.validation";
import { Router } from "express";

const route = Router();
route.post('',auth('user', 'admin'), validation(bookingValidation.createValidationSchema), bookingController.createBooking)

export const bookingRoutes = route;