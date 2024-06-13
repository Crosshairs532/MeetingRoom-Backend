import { path } from 'path'
import { Router } from 'express'

const router = Router()

const modelRoutes = [
  {
    path: '/auth',
    routes: userRoute,
  },
]
