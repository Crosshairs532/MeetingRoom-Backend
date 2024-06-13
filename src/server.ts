import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

main().catch(err => console.log(err))

async function main() {
  try {
    await mongoose.connect(config.db_url as string)
    app.listen(config.port, () => {
      console.log(
        `Meeting Room Booking System server in running on port ${config.port}`,
      )
    })
  } catch (err) {
    console.log(err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
