import dotenv from 'dotenv'
import http from 'http'
import express from 'express'
import cors from 'cors'
import { logger } from './middlewares/logger';
import userRoute from './routes/user.route'

dotenv.config()

const app: express.Application = express();
const port = Number(process.env.PORT) || 8080;

const httpServer: http.Server = http.createServer(app)

app.use(logger)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/users', userRoute)

httpServer.listen(port, () => {
  console.log(`Server is running at ${process.env.BASE_URL}:${port}`)
})
