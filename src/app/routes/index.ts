import { Router } from 'express'
import { userRoute } from '../modules/user/user.routes'

const router = Router()

const modelRoutes = [
  {
    path: '/auth',
    routes: userRoute,
  },
]

modelRoutes.forEach(route => {
  router.use(route.path, route.routes)
})

export default router
