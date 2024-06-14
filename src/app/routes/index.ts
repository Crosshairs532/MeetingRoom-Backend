import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { roomRoutes } from '../modules/Room/room.routes';
import { slotRoutes } from '../modules/slot/slot.route';

const routes = Router()
const modelRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path:"/rooms", 
    route: roomRoutes
  },{
    path:'/slots',
    route:slotRoutes
  }
]

modelRoutes.forEach(route => {
  routes.use(route.path, route.route)
})

export default routes
