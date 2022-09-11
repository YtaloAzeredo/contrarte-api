import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'
import NotFoundError from '@errors/not-found.error'

export class CreateAddressesUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (addressesData: Addresses): Promise<Addresses> {
    const user = await this.usersRepository.getOne({ id: addressesData.user })
    if (!user) throw new NotFoundError(this.usersRepository.getNotFoundError())
    return this.addressesRepository.store(addressesData)
  }
}
