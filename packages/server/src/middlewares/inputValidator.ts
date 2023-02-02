import createHttpError from 'http-errors';
import { ZodError } from 'zod'
import { CreateUserSchema } from './../schema/user.schema'
import { NextFunction, Request, Response } from 'express'

export const validateInput = function(schema: typeof CreateUserSchema) {
    return function(req: Request, res: Response, next: NextFunction) {
        try {
            
            schema.parse(req.body)

            return next()
        } catch (fail) {
            return next(new createHttpError.BadRequest(fail.errors[0].message))
        }
    }
}