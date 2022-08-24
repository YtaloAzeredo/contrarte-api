import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'

export class DeleteAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (id: number): Promise<string> {
    const response = await this.addressesRepository.getOne({ id, throws: true })
    await this.addressesRepository.remove(response)
    return this.addressesRepository.getDeleteMessage()
  }
}
