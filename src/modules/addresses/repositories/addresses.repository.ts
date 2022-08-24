import { Addresses } from '@modules/addresses/models/addresses.model'
import NotFoundError from '@errors/not-found.error'
import { Abstract } from '@repositories/abstract.repository'
import { IAddressesRepository } from './addresses-repository.interface'

export class AddressesRepository extends Abstract implements IAddressesRepository {
  constructor () {
    super('Address')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<Addresses[]> {
    const response = await Addresses.find()
    if (!response.length && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  async getOne ({ id, throws }: { id?: number, throws?: boolean }): Promise<Addresses> {
    const response = await Addresses.findOneBy({ id }) as Addresses
    if (!response && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  add (dataValues: Addresses): Addresses {
    return Addresses.create(dataValues)
  }

  async store (dataValues: Addresses): Promise<Addresses> {
    const response = Addresses.create(dataValues)
    return response.save()
  }

  async save (request: Addresses): Promise<Addresses> {
    return request.save()
  }

  async remove (request: Addresses): Promise<Addresses> {
    return request.remove()
  }
}
