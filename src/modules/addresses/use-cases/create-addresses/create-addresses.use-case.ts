import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'

export class CreateAddressesUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (addressesData: Addresses): Promise<Addresses> {
    await this.usersRepository.getOne({ id: addressesData.user, throws: true })
    return this.addressesRepository.store(addressesData)
  }
}
