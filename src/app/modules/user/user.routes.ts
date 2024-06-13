import { Router } from 'express'
import { userController } from './user.controller'
import { validation } from '../../middleware/validation'
import { userValidation } from './user.validation'

const routes = Router()


export const userRoute = routes
