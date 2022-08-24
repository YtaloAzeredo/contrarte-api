import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'
import { Request, Response } from 'express'

export class UpdateUsersController implements IController {
  constructor (private readonly updateUsersUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.updateUsersUseCase.execute({
      id: +req.params.id,
      ...req.body
    })
    return res.json({ response })
  }
}
