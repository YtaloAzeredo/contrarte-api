import { getAllAddressesController } from '@modules/addresses/use-cases/get-all-addresses'
import { getOneAddressesController } from '@modules/addresses/use-cases/get-one-addresses'
import { createAddressesController } from '@modules/addresses/use-cases/create-addresses'
import { deleteAddressesController } from '@modules/addresses/use-cases/delete-addresses'
import { updateAddressesController } from '@modules/addresses/use-cases/update-addresses'
import { Router } from 'express'
const router = Router()

router.get('/addresses', (req, res) => getAllAddressesController.handle(req, res))
router.get('/addresses/:id', (req, res) => getOneAddressesController.handle(req, res))
router.post('/addresses', (req, res) => createAddressesController.handle(req, res))
router.delete('/addresses/:id', (req, res) => deleteAddressesController.handle(req, res))
router.put('/addresses/:id', (req, res) => updateAddressesController.handle(req, res))

export default router
