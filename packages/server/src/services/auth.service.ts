import { CreateUserInput } from './../dto/user.dto'
import User from './../models/user.model'

export default class AuthService {

    constructor() {}

    static async signIn({email, password}: {email: string, password: string}) {

        try {
            const user = await User.findOne({email})

            if(!user) throw new Error('User not registered')

            const isMatchPassword = await user.isPasswordMatch(password)

            if(!isMatchPassword) throw new Error('Incorrect credentials')

            return {
                id: user._id,
                name: user.name,
                email: user.email,
                auth_type: user.auth_type
            }
        } catch (error) {
            throw error
        }
    }

    static async signUp(input: CreateUserInput) {

        try {
            const user = await User.findOne({email: input.email})

            if(user) throw new Error('User already exist')

            const newUser = await User.create(input)

            return {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                auth_type: newUser.auth_type
            }
        } catch (error) {
            throw error
        }
    }
    
}