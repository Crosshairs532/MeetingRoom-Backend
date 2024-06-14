import { Router } from 'express'
import auth from '../../middleware/auth'
import { userController } from './user.controller'
const routes = Router()
routes.get('/', auth('user'), userController.getUserBookings)


export const userRoute = routes
