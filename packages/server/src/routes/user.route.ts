import express from 'express'
import { validateInput } from './../middlewares/inputValidator';
import userController from './../controllers/user.controller'
import { CreateUserSchema as createUserValidator } from './../schema/user.schema'
import { isAuthenticated } from './../middlewares/isAuthenticated';

const router = express.Router()

router.use(isAuthenticated)

router.get('/', userController.getAllUsers)
router.post('/', validateInput(createUserValidator), userController.createUser)

export default router