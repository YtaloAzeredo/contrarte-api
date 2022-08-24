import { Users } from '@modules/users/models/users.model'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class GetOneUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (id: number): Promise<Users> {
    return this.usersRepository.getOne({ id, throws: true })
  }
}
