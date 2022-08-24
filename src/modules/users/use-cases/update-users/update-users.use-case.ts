import { Users } from '@modules/users/models/users.model'
import ConflictError from '@errors/conflict.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class UpdateUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (userData: Users): Promise<Users> {
    const response = await this.usersRepository.getOne({ id: userData.id, throws: true })
    if (userData.email) {
      const userExist = await this.usersRepository.getOne({ email: userData.email })
      if (userExist) throw new ConflictError(this.usersRepository.getConflictError())
    }
    response.name = userData.name
    response.email = userData.email
    response.password = userData.password
    return this.usersRepository.save(response)
  }
}
