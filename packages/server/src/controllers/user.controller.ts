import UserService from './../services/user.service'
import { TCreateUser } from './../schema/user.schema';
import { Response, Request, NextFunction } from 'express'

const getAllUsers = async function(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await UserService.getAllUser()
        res.json({users})
    } catch (error) {
        next(error)
    }
}

const createUser = async function(
    req: Request<{}, {}, TCreateUser>, 
    res: Response, 
    next: NextFunction
    ) {

    const {body} = req

    try {
        const user = await UserService.createUser(body)
        res.json({user})
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}


export default {
    getAllUsers,
    createUser
}