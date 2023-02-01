import { Response, Request } from 'express'

const getAllUsers = async function(req: Request, res: Response) {
    res.json({
        status: res.statusCode,
        users: []
    })
}


export default {
    getAllUsers
}