import http from 'http'
import express from 'express'
import cors from 'cors'
import config from './config/config'
import { logger } from './middlewares/logger';
import userRoute from './routes/user.route'
import Database from './services/database.service'


async function main() {
  try {
    await Database.connect(config.database)
    await startServer()
  } catch (error) {
    console.log(error.message)
  }
}

async function startServer() {
  const app: express.Application = express();
  const host = config.server.host
  const port = config.server.port
  
  const httpServer: http.Server = http.createServer(app)
  
  app.use(logger)
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  
  app.use('/users', userRoute)
  
  httpServer.listen(port, () => {
    console.log(`Server is running at ${host}:${port}`)
  })
}

main()