import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class UpdateAddressesController implements IController {
  constructor (private readonly updateAddressesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.updateAddressesUseCase.execute({
      id: +req.params.id,
      ...req.body
    })
    return res.json({ response })
  }
}
