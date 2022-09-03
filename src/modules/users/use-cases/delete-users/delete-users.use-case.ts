import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class DeleteUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (id: number): Promise<string> {
    const user = await this.usersRepository.getOne({ id })
    if (!user) throw new NotFoundError(this.usersRepository.getNotFoundError())
    await this.usersRepository.remove(user)
    return this.usersRepository.getDeleteMessage()
  }
}
