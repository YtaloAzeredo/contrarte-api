import { AddressesRepository } from '@modules/addresses/repositories/addresses.repository'
import { UserRepository } from '@modules/users/repositories/users.repository'
import { CreateAddressesController } from './create-addresses.controller'
import { CreateAddressesUseCase } from './create-addresses.use-case'

const usersRepository = new UserRepository()
const addressesRepository = new AddressesRepository()
const createAddressesUseCase = new CreateAddressesUseCase(usersRepository, addressesRepository)
export const createAddressesController = new CreateAddressesController(createAddressesUseCase)
