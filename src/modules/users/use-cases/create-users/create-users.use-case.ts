import { Users } from '@modules/users/models/users.model'
import ConflictError from '@errors/conflict.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class CreateUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (userData: Users): Promise<Users> {
    const userExist = await this.usersRepository.getOne({ email: userData.email })
    if (userExist) throw new ConflictError(this.usersRepository.getConflictError())
    return this.usersRepository.store(userData)
  }
}
