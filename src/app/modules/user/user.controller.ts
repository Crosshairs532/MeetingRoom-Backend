import { Response } from 'express'
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../utils/catchAsynch'
import { userService } from './user.service'
import { sendResponse } from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.path)
    const userData = req.body
    const userCreated = await userService.createUserDb(userData)
    const ResponseData = {
      _id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      phone: userCreated.phone,
      role: userCreated.role,
      address: userCreated.address,
    }
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User registered successfully',
      data: ResponseData,
    })
  },
)
export const userController = {
  createUser,
}
