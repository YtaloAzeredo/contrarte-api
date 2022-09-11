import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetAllPostsController implements IController {
  constructor (private readonly getAllPostsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getAllPostsUseCase.execute({
      user: req.query.user
    })
    return res.json({ response })
  }
}
