import dotenv from 'dotenv'

dotenv.config()

const {
    HOST,
    PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
} = process.env

const serverConfig = {
    host: HOST || 'localhost',
    port: Number(PORT) || 5000,
}

const dbConfig = {
    username: DB_USERNAME || '',
    password: DB_PASSWORD || '',
    database: DB_NAME || '',
    url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rgtf89n.mongodb.net/${DB_NAME}`
}

export default {
    server: serverConfig,
    database: dbConfig
}