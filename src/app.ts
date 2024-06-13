import express, { Application } from 'express'
const app: Application = express()

app.get('/', (req, res) => {
  res.send('Meeting Room Booking System server in running.')
})

app.use('/api', router)

export default app
