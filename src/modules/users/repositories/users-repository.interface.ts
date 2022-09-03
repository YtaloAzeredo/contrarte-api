import { IRepository } from '@interfaces/repository.interface'
import { Users } from '@modules/users/models/users.model'

export interface IUsersRepository extends IRepository {
  getAll(data?: any): Promise<Users[]>
  getOne(data: any): Promise<Users>
  add(data: any): Users
  store(data: any): Promise<Users>
  save(data: any): Promise<Users>
  remove(data: any): Promise<Users>
}
