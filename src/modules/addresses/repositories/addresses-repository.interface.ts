import { IRepository } from '@interfaces/repository.interface'
import { Addresses } from '../models/addresses.model'

export interface IAddressesRepository extends IRepository {
  getAll(data: any): Promise<Addresses[]>
  getOne(data: any): Promise<Addresses>
  add(data: any): Addresses
  store(data: any): Promise<Addresses>
  save(data: any): Promise<Addresses>
  remove(data: any): Promise<Addresses>
}
