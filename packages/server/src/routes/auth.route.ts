import express from 'express'
import authController from './../controllers/auth.controller'

const router = express.Router()

router.post('/signin', authController.signIn)
router.post('/google-signin', authController.googleSignIn)
router.post('/signup', authController.signUp)
router.post('/signout', authController.signOut)
router.post('/refresh-token', authController.refreshToken)

export default router