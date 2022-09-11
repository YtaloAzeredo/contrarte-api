import { Users } from '@modules/users/models/users.model'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import NotFoundError from '@errors/not-found.error'

export class GetAllUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (): Promise<Users[]> {
    const users = await this.usersRepository.getAll()
    if (!users.length) throw new NotFoundError(this.usersRepository.getNotFoundError())
    return users
  }
}
