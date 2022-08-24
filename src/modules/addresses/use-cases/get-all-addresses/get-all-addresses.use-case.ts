import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'

export class GetAllAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (): Promise<Addresses[]> {
    return this.addressesRepository.getAll({ throws: true })
  }
}
