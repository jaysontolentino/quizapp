import { z, string } from 'zod'

export const CreateUserSchema = z.object({
    name: string({
        required_error: 'Name must not empty'
    }).min(3),
    email: string().email(),
    password: string({
        required_error: 'Password must not empty'
    }).min(6),
    password_confirm: string(),
    auth_type: string()
}).refine((data) => data.password_confirm === data.password, {
    message: 'Passwords must be match',
    path: ['password_confirm']
})

export type TCreateUser = z.infer<typeof CreateUserSchema>