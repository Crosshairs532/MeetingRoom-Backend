/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../utils/catchAsynch'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
)
export const userController = {
  createUser,
}
