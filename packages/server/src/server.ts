import { NextFunction, Request, Response } from 'express';
import http from 'http'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from './config/config'
import { logger } from './middlewares/logger'
import authRoute from './routes/auth.route'
import userRoute from './routes/user.route'
import quizRoute from './routes/quiz.route'
import Database from './services/database.service'
import createHttpError, { HttpError } from 'http-errors'


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
  app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
  }))
  app.use(express.json())
  app.use(cookieParser())
  app.use(express.urlencoded({extended: false}))
  
  app.use('/auth', authRoute)
  app.use('/users', userRoute)
  app.use('/quiz', quizRoute)

  app.use(function(req, res, next) {
    const err = new createHttpError.NotFound()
    next(err)
  })

  app.use(function(err: Error | HttpError, __: Request, res: Response, _: NextFunction) {

    let error = err instanceof HttpError ? err : new createHttpError.InternalServerError(err.message)
    
    res.status(error.statusCode)
    res.json({
      status: error.status,
      error: error.message
    })
  })
  
  httpServer.listen(port, () => {
    console.log(`Server is running at ${host}:${port}`)
  })
}

main()