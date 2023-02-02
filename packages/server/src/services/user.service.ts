import { CreateUserInput, TUserResponse } from 'src/dto/user.dto'
import User from './../models/user.model'

export default class UserService {
    constructor() {}

    async geAllUser(): Promise<TUserResponse> {
        try {
            const users = await User.find().select('-password')
            return users
        } catch (error) {
            throw error
        }
    }

    async createUser(input: CreateUserInput) {
        try {
            return await User.create(input)
        } catch (error) {
            throw error
        }
    }

}