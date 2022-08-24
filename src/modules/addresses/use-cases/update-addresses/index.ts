import { AddressesRepository } from '@modules/addresses/repositories/addresses.repository'
import { UpdateAddressesController } from './update-addresses.controller'
import { UpdateAddressesUseCase } from './update-addresses.use-case'

const addressesRepository = new AddressesRepository()
const updateAddressesUseCase = new UpdateAddressesUseCase(addressesRepository)
export const updateAddressesController = new UpdateAddressesController(updateAddressesUseCase)
