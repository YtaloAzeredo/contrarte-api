import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class DeletePostsController implements IController {
  constructor (private readonly deletePostsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.deletePostsUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}
