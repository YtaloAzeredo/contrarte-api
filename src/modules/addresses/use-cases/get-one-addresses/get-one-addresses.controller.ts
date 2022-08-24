import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetOneAddressesController implements IController {
  constructor (private readonly getOneAddressesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getOneAddressesUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}
