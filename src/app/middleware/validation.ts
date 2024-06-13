import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsynch'
import { AnyZodObject } from 'zod'

export const validation = (validationSchema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await validationSchema.parseAsync(req.body)
    next()
  })
}
