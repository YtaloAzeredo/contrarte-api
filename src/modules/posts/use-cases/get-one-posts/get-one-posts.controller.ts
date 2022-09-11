import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetOnePostsController implements IController {
  constructor (private readonly getOnePostsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getOnePostsUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}
