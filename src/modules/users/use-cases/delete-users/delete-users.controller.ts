import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'
import { Request, Response } from 'express'

export class DeleteUsersController implements IController {
  constructor (private readonly deleteUsersUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.deleteUsersUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}
