import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'

const routes = Router()
const modelRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
]

modelRoutes.forEach(route => {
  routes.use(route.path, route.route)
})

export default routes
