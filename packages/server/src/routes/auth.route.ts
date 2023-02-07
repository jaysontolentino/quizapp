import { isAuthenticated } from './../middlewares/isAuthenticated';
import { TypeLoginSchema, TypeRegisterSchema, loginSchema, registerSchema } from './../schema/auth.schema'
import { validateInput } from './../middlewares/inputValidator'
import express from 'express'
import authController from './../controllers/auth.controller'

const router = express.Router()

router.post('/signin', validateInput<TypeLoginSchema>(loginSchema), authController.signIn)
router.post('/signup', validateInput<TypeRegisterSchema>(registerSchema), authController.signUp)
router.post('/signout', isAuthenticated, authController.signOut)
router.get('/refresh-token', authController.refreshToken)

export default router