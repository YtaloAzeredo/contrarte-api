import { AddressesRepository } from '@modules/addresses/repositories/addresses.repository'
import { GetOneAddressesController } from './get-one-addresses.controller'
import { GetOneAddressesUseCase } from './get-one-addresses.use-case'

const addressesRepository = new AddressesRepository()
const getOneAddressesUseCase = new GetOneAddressesUseCase(addressesRepository)
export const getOneAddressesController = new GetOneAddressesController(getOneAddressesUseCase)
