import { Users } from '@modules/users/models/users.model'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class GetAllUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (): Promise<Users[]> {
    return this.usersRepository.getAll({ throws: true })
  }
}
