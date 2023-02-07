import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'

dotenv.config()

const {
    HOST,
    PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    JWT_ACCESS_KEY,
    JWT_REFRESH_KEY,
    JWT_ACCESS_EXP,
    JWT_REFRESH_EXP
} = process.env

export type TServerConfig = {
    readonly host: string
    readonly port: number
}

export type TDbConfig = {
    readonly username: string
    readonly password: string
    readonly database: string
    readonly url: string
}

export type TJwtConfig = {
    readonly keyAccessToken: jwt.Secret
    readonly keyRefreshToken: jwt.Secret
    readonly accessTokenExp: string
    readonly refreshTokenExp: string
}

const serverConfig: TServerConfig = {
    host: HOST || 'localhost',
    port: Number(PORT) || 5000,
}

const dbConfig: TDbConfig = {
    username: DB_USERNAME || '',
    password: DB_PASSWORD || '',
    database: DB_NAME || '',
    url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rgtf89n.mongodb.net/${DB_NAME}`
}

const jwtConfig: TJwtConfig = {
    keyAccessToken: JWT_ACCESS_KEY || 'secret_access_token',
    keyRefreshToken: JWT_REFRESH_KEY || 'secret_refresh_token',
    accessTokenExp: JWT_ACCESS_EXP || '5m',
    refreshTokenExp: JWT_REFRESH_EXP || '7d'
}

export default {
    server: serverConfig,
    database: dbConfig,
    jwt: jwtConfig
}