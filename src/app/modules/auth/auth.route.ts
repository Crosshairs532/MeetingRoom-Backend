import { Router } from 'express'
import { validation } from '../../middleware/validation'
import { userValidation } from '../user/user.validation'
import { authController } from './auth.controller'

const routes = Router()
routes.post('/login',authController.signIn)
routes.post(
    '/signup',
    validation(userValidation.createUserValidation),
    authController.createUser,
  )
  

export const authRoutes = routes
