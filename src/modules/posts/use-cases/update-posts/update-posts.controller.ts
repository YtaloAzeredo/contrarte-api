import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class UpdatePostsController implements IController {
  constructor (private readonly updatePostsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.updatePostsUseCase.execute({
      id: +req.params.id,
      ...req.body
    })
    return res.json({ response })
  }
}
