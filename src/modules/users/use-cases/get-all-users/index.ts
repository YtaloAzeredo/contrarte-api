import { UserRepository } from '../../repositories/users.repository'
import { GetAllUsersController } from './get-all-users.controller'
import { GetAllUsersUseCase } from './get-all-users.use-case'

const usersRepository = new UserRepository()
const getAllUsersUseCase = new GetAllUsersUseCase(usersRepository)
export const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)
