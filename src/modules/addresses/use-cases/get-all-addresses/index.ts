import { AddressesRepository } from '@modules/addresses/repositories/addresses.repository'
import { GetAllAddressesController } from './get-all-addresses.controller'
import { GetAllAddressesUseCase } from './get-all-addresses.use-case'

const addressesRepository = new AddressesRepository()
const getAllAddressesUseCase = new GetAllAddressesUseCase(addressesRepository)
export const getAllAddressesController = new GetAllAddressesController(getAllAddressesUseCase)
