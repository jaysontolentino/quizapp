import { Request, Response, Router } from "express";
import userController from './../controllers/user.controller'

const router = Router()

router.get('/', userController.getAllUsers)

export default router