import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'
const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Meeting Room Booking System server in running.')
})

export default app
