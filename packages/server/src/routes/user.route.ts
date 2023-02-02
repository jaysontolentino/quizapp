import express from 'express'
import { validateInput } from './../middlewares/inputValidator';
import userController from './../controllers/user.controller'
import { CreateUserSchema as createUserValidator } from './../schema/user.schema'

const router = express.Router()

router.get('/', userController.getAllUsers)
router.post('/', validateInput(createUserValidator), userController.createUser)

export default router