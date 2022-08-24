import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'

export class UpdateAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (addressesData: Addresses): Promise<Addresses> {
    const response = await this.addressesRepository.getOne({ id: addressesData.id, throws: true })
    response.street = addressesData.street
    response.city = addressesData.city
    response.zipCode = addressesData.zipCode
    return this.addressesRepository.save(response)
  }
}
