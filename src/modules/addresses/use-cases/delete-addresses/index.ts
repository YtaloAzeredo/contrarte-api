import { AddressesRepository } from '@modules/addresses/repositories/addresses.repository'
import { DeleteAddressesController } from './delete-addresses.controller'
import { DeleteAddressesUseCase } from './delete-addresses.use-case'

const addressesRepository = new AddressesRepository()
const deleteAddressesUseCase = new DeleteAddressesUseCase(addressesRepository)
export const deleteAddressesController = new DeleteAddressesController(deleteAddressesUseCase)
