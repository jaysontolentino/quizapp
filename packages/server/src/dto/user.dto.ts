import { ProjectionFields, Types } from 'mongoose'
import { TCreateUser } from './../schema/user.schema'
import { IUserSchema } from 'src/models/user.model'

export type CreateUserInput = Pick<TCreateUser, 'name' | 'email' | 'password' >
export type TUserResponse = ProjectionFields<IUserSchema & {
    _id: Types.ObjectId;
}>