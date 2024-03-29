import express from  'express'
import UserController from '../controller/user.js'
const router = express.Router()

router.get('/',UserController.getAllUsers)
router.post('/',UserController.createUser)

export default router