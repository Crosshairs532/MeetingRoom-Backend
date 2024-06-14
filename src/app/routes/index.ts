import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { roomRoutes } from '../modules/Room/room.routes';
import { slotRoutes } from '../modules/slot/slot.route';
import { bookingRoutes } from '../modules/booking/booking.route';
import { userRoute } from '../modules/user/user.routes';

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
  },
  {
    path:'/bookings',
    route:bookingRoutes
  },
  {
    path:'/my-bookings',
    route: userRoute
  }
]

modelRoutes.forEach(route => {
  routes.use(route.path, route.route)
})

export default routes
