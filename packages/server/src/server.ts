import http from 'http'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './config/config'
import { logger } from './middlewares/logger';
import userRoute from './routes/user.route'

const app: express.Application = express();
const host = config.server.host
const port = config.server.port

const httpServer: http.Server = http.createServer(app)

mongoose.set('strictQuery', true);
mongoose.connect(config.database.url, {
  retryWrites: true,
  w: 'majority'
}).then(res => {
  console.log('Connected to database!')
}).catch(err => {
  console.log(err)
})

app.use(logger)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/users', userRoute)

httpServer.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`)
})
