import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../utils/catchAsynch'

const userSignup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
)
export const userController = {
  userSignup,
}
