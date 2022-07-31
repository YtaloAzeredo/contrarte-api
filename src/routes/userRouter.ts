import UsersController from '@controllers/UsersController'
import { Router } from 'express'
const router = Router()

router.post('/users', UsersController.create)

export default router
