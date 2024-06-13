import express, { Application } from 'express'
import router from './app/routes'
const app: Application = express()

app.get('/', (req, res) => {
  res.send('Meeting Room Booking System server in running.')
})

app.use('/api', router)

export default app
