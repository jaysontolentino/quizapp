import mongoose from 'mongoose'
import { TDbConfig } from 'src/config/config'

export default class Database {

    public static instance: Database

    constructor() {
        Database.instance = this
    }

    static async connect(config: TDbConfig) {
        try {
            mongoose.set({"strictQuery": true})
            await mongoose.connect(config.url, {
                retryWrites: true,
                w: 'majority'
            })

            console.log('Connected to mongoDB')
        } catch (error) {
            throw error
        }
    }
}