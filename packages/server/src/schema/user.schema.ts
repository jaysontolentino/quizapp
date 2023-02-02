import { z } from 'zod'
import { string } from 'zod/lib'

const CreateUserSchema = z.object({
    name: string({
        required_error: 'Name must not empty'
    }).min(3),
    email: string({
        required_error: 'Email must not empty'
    }).email('Must be an email address'),
    password: string({
        required_error: 'Password must not empty'
    }).min(6),
    password_confirm: string(),
    auth_type: string()
}).refine((data) => data.password_confirm === data.password, {
    message: 'Passwords must be match',
    path: ['password_confirmation']
})

export type TCreateUser = z.infer<typeof CreateUserSchema>