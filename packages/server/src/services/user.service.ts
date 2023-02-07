import { CreateUserInput } from './../dto/user.dto'
import User from './../models/user.model'

export default class UserService {
    constructor() {}

    static async getAllUser() {
        try {
            const users = await User.find().select('-password')
            return users
        } catch (error) {
            throw error
        }
    }

    static async findUser(id: string) {
        try {
            const user = await User.findOne({_id: id})
            return user
        } catch (error) {
            throw error
        }
    }

    static async createUser(input: CreateUserInput) {
        try {
            return await User.create(input)
        } catch (error) {
            throw error
        }
    }

}