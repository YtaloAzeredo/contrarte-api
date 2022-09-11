import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'
import NotFoundError from '@errors/not-found.error'

export class GetAllAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (): Promise<Addresses[]> {
    const addresses = await this.addressesRepository.getAll()
    if (!addresses.length) throw new NotFoundError(this.addressesRepository.getNotFoundError())
    return addresses
  }
}
