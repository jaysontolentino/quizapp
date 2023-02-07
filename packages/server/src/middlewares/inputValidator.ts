import createHttpError from 'http-errors';
import { NextFunction, Request, Response } from 'express'
import {z} from 'zod';

export const validateInput = function<T extends z.ZodSchema>(schema: T) {
    return function(req: Request, res: Response, next: NextFunction) {
        try {

            schema.parse(req.body)

            next()
        } catch (fail) {
            next(new createHttpError.BadRequest(fail.errors[0].message))
        }
    }
}

// export const validateSignInInput = function(schema: typeof loginSchema) {
//     return function(req: Request, res: Response, next: NextFunction) {
//         try {
            
//             schema.parse(req.body)

//             return next()
//         } catch (fail) {
//             return next(new createHttpError.BadRequest(fail.errors[0].message))
//         }
//     }
// }
