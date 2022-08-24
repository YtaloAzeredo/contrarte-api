import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class CreateAddressesController implements IController {
  constructor (private readonly createAddressesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.createAddressesUseCase.execute(req.body)
    return res.json({ response })
  }
}
