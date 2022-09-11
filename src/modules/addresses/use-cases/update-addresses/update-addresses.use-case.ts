import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { Addresses } from '@modules/addresses/models/addresses.model'
import NotFoundError from '@errors/not-found.error'

export class UpdateAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (addressesData: Addresses): Promise<Addresses> {
    const address = await this.addressesRepository.getOne({ id: addressesData.id })
    if (!address) throw new NotFoundError(this.addressesRepository.getNotFoundError())
    address.street = addressesData.street
    address.city = addressesData.city
    address.zipCode = addressesData.zipCode
    return this.addressesRepository.save(address)
  }
}
