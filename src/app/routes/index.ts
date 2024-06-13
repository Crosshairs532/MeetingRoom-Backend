import { path } from 'path';
import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { roomRoutes } from '../modules/Room/room.routes';

const routes = Router()
const modelRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path:"/rooms", 
    route: roomRoutes
  },
]

modelRoutes.forEach(route => {
  routes.use(route.path, route.route)
})

export default routes
