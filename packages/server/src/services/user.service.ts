import { CreateUserInput } from 'src/dto/user.dto'
import User from './../models/user.model'

export default class UserService {
    constructor() {}

    async createUser(input: CreateUserInput) {
        try {
            return User.create(input)
        } catch (error) {
            throw error
        }
    }

}