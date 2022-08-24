import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'

export class GetOneAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (id: number): Promise<Addresses> {
    return this.addressesRepository.getOne({ id, throws: true })
  }
}
