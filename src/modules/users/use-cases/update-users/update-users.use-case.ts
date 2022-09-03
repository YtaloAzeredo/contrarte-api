import { Users } from '@modules/users/models/users.model'
import ConflictError from '@errors/conflict.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import NotFoundError from '@errors/not-found.error'

export class UpdateUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (userData: Users): Promise<Users> {
    const user = await this.usersRepository.getOne({ id: userData.id })
    if (!user) throw new NotFoundError(this.usersRepository.getNotFoundError())
    if (userData.email) {
      const userExist = await this.usersRepository.getOne({ email: userData.email })
      if (userExist) throw new ConflictError(this.usersRepository.getConflictError())
    }
    user.name = userData.name
    user.email = userData.email
    user.password = userData.password
    return this.usersRepository.save(user)
  }
}
