import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'

export class DeleteAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (id: number): Promise<string> {
    const address = await this.addressesRepository.getOne({ id })
    if (!address) throw new NotFoundError(this.addressesRepository.getNotFoundError())
    await this.addressesRepository.remove(address)
    return this.addressesRepository.getDeleteMessage()
  }
}
