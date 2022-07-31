import { User } from '@models/User'
import { Request, Response } from 'express'

class UsersController {
  async create (req: Request, res: Response) {
    const userData: User = req.body
    const userExist = await User.findOneBy({ email: userData.email })
    if (userExist) {
      return res.status(409).json({ error: 'User email already exist' })
    }
    const createdUser = User.create(userData)
    await createdUser.save()
    return res.json(createdUser)
  }
};

export default new UsersController()
