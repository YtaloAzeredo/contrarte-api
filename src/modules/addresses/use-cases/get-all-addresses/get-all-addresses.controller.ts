import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetAllAddressesController implements IController {
  constructor (private readonly getAllAddressesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getAllAddressesUseCase.execute()
    return res.json({ response })
  }
}
