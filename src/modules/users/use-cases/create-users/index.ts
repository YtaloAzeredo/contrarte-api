import { UserRepository } from '../../repositories/users.repository'
import { CreateUsersController } from './create-users.controller'
import { CreateUsersUseCase } from './create-users.use-case'

const usersRepository = new UserRepository()
const createUsersUseCase = new CreateUsersUseCase(usersRepository)
export const createUsersController = new CreateUsersController(createUsersUseCase)
