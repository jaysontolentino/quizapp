import { NextFunction, Request, Response } from "express"

const validateInput = function(schema: Zod.AnyZodObject) {
    return function(req: Request, res: Response, next: NextFunction) {
        try {
            schema.parse(req.body)
        } catch (error) {
            return next(error)
        }
    }
}