import { Router } from 'express'
import { userRoute } from '../modules/user/user.routes'

const routes = Router()
const modelRoutes = [
  {
    path: '/auth',
    route: userRoute,
  },
]

modelRoutes.forEach(route => {
  routes.use(route.path, route.route)
})

export default routes
