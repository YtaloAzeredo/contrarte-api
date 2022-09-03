import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class CreatePostsController implements IController {
  constructor (private readonly createPostsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.createPostsUseCase.execute(req.body)
    return res.json({ response })
  }
}
