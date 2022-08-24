import { Request, Response, NextFunction } from 'express'

export const errorHandler = async function (err: any, req: Request, res: Response, next: NextFunction) {
  return res.status(err.statusCode || 500).json({ message: err.message })
}
