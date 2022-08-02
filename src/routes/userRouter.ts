import UsersController from '@controllers/UsersController'
import { Router } from 'express'
const router = Router()

router.post('/users', UsersController.create)
router.get('/users', UsersController.get)

export default router
