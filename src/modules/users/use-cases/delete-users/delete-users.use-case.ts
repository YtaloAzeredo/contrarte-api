import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class DeleteUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (id: number): Promise<string> {
    const response = await this.usersRepository.getOne({ id, throws: true })
    await this.usersRepository.remove(response)
    return this.usersRepository.getDeleteMessage()
  }
}
