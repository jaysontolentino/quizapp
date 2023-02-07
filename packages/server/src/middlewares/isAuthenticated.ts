import { TDecodedToken, verifyToken } from './../utils/jwt.util'
import { NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'

export interface IAuthReq extends Request {
    user: TDecodedToken
}

export const isAuthenticated = async function(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers?.authorization
        const token = authHeader?.split(' ')[1]

        const decoded = await verifyToken('access_token' ,token as string)

        req.user = decoded as TDecodedToken

        return next()

    } catch (error) {

        return next(new createHttpError.Unauthorized)
        
    }
}