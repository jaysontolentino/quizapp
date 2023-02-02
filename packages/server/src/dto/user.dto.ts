import { IUser } from 'src/models/user.model'

export type CreateUserInput = Pick<IUser, 'name' | 'email' | 'password' | 'auth_type'>