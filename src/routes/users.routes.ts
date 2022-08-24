import { getAllUsersController } from '@modules/users/use-cases/get-all-users'
import { getOneUsersController } from '@modules/users/use-cases/get-one-users'
import { createUsersController } from '@modules/users/use-cases/create-users'
import { deleteUsersController } from '@modules/users/use-cases/delete-users'
import { updateUsersController } from '@modules/users/use-cases/update-users'
import { Router } from 'express'
const router = Router()

router.get('/users', (req, res) => getAllUsersController.handle(req, res))
router.get('/users/:id', (req, res) => getOneUsersController.handle(req, res))
router.post('/users', (req, res) => createUsersController.handle(req, res))
router.delete('/users/:id', (req, res) => deleteUsersController.handle(req, res))
router.put('/users/:id', (req, res) => updateUsersController.handle(req, res))

export default router
