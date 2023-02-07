import { TDecodedToken, createToken, verifyToken } from './../utils/jwt.util'
import { NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'
import AuthService from './../services/auth.service'
import UserService from './../services/user.service'
import { TRegisterSchema } from './../schema/auth.schema'
import config from './../config/config'

const signIn = async function(req: Request, res: Response, next: NextFunction) {
    try {

        const {email, password} = req.body

        const user = await AuthService.signIn({email, password})

        const token = await createToken('access_token', {user_id: user.id as string, email: user.email})
        const refreshToken = await createToken('refresh_token', {user_id: user.id as string, email: user.email})

        const refreshTokenExp = Number(config.jwt.refreshTokenExp)

        res.cookie('rtx', refreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + refreshTokenExp * 60 * 1000),
            maxAge: refreshTokenExp * 60 * 1000
        })

        res.json({
            user,
            token
        })
    } catch (error) {
        next(error)
    }
}

const signUp = async function(req: Request<{},{},TRegisterSchema>, res: Response, next: NextFunction) {
    try {

        const user = await AuthService.signUp(req.body)

        const token = await createToken('access_token', {user_id: user.id as string, email: user.email})
        const refreshToken = await createToken('refresh_token', {user_id: user.id as string, email: user.email})

        const refreshTokenExp = Number(config.jwt.refreshTokenExp)

        res.cookie('rtx', refreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + refreshTokenExp * 60 * 1000),
            maxAge: refreshTokenExp * 60 * 1000
        })

        res.json({
            user,
            token
        })
        
    } catch (error) {
        next(error)
    }
}

const signOut = function(req: Request, res: Response, next: NextFunction) {
    try {
        res.cookie('rtx', '', {maxAge: -1})

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}

const refreshToken = async function(req: Request, res: Response, next: NextFunction) {
    try {
        const refreshToken = req.cookies?.rtx

        if(!refreshToken) throw new createHttpError.Forbidden("Failed to refresh token")

        const decoded = await verifyToken<TDecodedToken>('refresh_token', refreshToken)

        console.log('decoded refresh token, ', decoded)

        const user = await UserService.findUser(decoded.user_id)

        if(!user) throw new createHttpError.Forbidden("Failed to refresh token")

        console.log('user, ', user)

        const newToken = await createToken('access_token', {user_id: user.id as string, email: user.email})
        const newRefreshToken = await createToken('refresh_token', {user_id: user.id as string, email: user.email})

        const refreshTokenExp = Number(config.jwt.refreshTokenExp)

        res.cookie('rtx', newRefreshToken, {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + refreshTokenExp * 60 * 1000),
            maxAge: refreshTokenExp * 60 * 1000,
        })

        res.json({
            token: newToken
        })

    } catch (error) {
        next(error)
    }
}

export default {
    signIn,
    signUp,
    signOut,
    refreshToken
}