import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class CreateUsersController implements IController {
  constructor (private readonly createUsersUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.createUsersUseCase.execute(req.body)
    return res.json({ response })
  }
}
