import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class DeleteAddressesController implements IController {
  constructor (private readonly deleteAddressesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.deleteAddressesUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}
