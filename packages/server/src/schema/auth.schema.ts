import { z, string } from 'zod'

export const loginSchema = z.object({
    email: string().email(),
    password: string({
        required_error: 'Password must not empty'
    }).min(6)
})

export const registerSchema = z.object({
    name: string({
        required_error: 'Name must not empty'
    }).min(3),
    email: string().email(),
    password: string({
        required_error: 'Password must not empty'
    }).min(6),
    password_confirm: string()
}).refine((data) => data.password_confirm === data.password, {
    message: 'Passwords must be match',
    path: ['password_confirm']
})

export type TypeLoginSchema = typeof loginSchema

export type TypeRegisterSchema = typeof registerSchema

export type TRegisterSchema = z.infer<typeof registerSchema>

export type TLoginSchema = z.infer<typeof loginSchema>