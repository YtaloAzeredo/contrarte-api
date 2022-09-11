import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'
import NotFoundError from '@errors/not-found.error'

export class GetOneAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (id: number): Promise<Addresses> {
    const address = await this.addressesRepository.getOne({ id })
    if (!address) throw new NotFoundError(this.addressesRepository.getNotFoundError())
    return address
  }
}
