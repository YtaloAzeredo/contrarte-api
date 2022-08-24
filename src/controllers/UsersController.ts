import { Users } from '@models/users.model'
import { Request, Response } from 'express'

class UsersController {
  async create (req: Request, res: Response) {
    const userData: Users = req.body
    const userExist = await Users.findOneBy({ email: userData.email })
    if (userExist) {
      return res.status(409).json({ error: 'User email already exist' })
    }
    const createdUser = Users.create(userData)
    await createdUser.save()
    return res.json(createdUser)
  }

  async get (req: Request, res: Response) {
    const userData: Query = req.query as unknown as Query
    const foundUser = await Users.findOneBy({ email: userData.email })
    return res.json(foundUser)
  }
};

interface Query {
  id: number,
  email: string
}

export default new UsersController()
