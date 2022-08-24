import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'
import { Request, Response } from 'express'

export class GetOneUsersController implements IController {
  constructor (private readonly getOneUsersUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getOneUsersUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}
