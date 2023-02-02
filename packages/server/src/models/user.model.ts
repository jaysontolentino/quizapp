import mongoose, { Document, Schema, Types } from 'mongoose'
import * as argon2 from 'argon2'

export interface IUser {
    name: string
    email: string
    password: string
    auth_type: 'basic' | 'google'
    createdAt: Date
    updatedAt: Date
    isPasswordMatch(password: string): Promise<Boolean>
}

export interface IUserSchema extends IUser , Document {}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    auth_type: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.pre('save', async function(next) {
    let user = this

    if(user.isModified('password')) {
        let hashedPassword = await argon2.hash(user.password)
        user.password = hashedPassword
        return next()
    }

    return next()
})

UserSchema.methods.isPasswordMatch = async function(password: string): Promise<Boolean> {
    let user = this
    return await argon2.verify(user.password, password)
}

export default mongoose.model<IUserSchema>('User', UserSchema)