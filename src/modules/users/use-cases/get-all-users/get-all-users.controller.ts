
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'
import { Request, Response } from 'express'

export class GetAllUsersController implements IController {
  constructor (private readonly getAllUsersUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getAllUsersUseCase.execute()
    return res.json({ response })
  }
}
