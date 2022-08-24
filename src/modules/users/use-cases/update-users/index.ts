import { UserRepository } from '../../repositories/users.repository'
import { UpdateUsersController } from './update-users.controller'
import { UpdateUsersUseCase } from './update-users.use-case'

const usersRepository = new UserRepository()
const updateUsersUseCase = new UpdateUsersUseCase(usersRepository)
export const updateUsersController = new UpdateUsersController(updateUsersUseCase)
