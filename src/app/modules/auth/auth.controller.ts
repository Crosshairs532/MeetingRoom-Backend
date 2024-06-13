
import { authService } from './auth.service'
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../utils/catchAsynch'
import { sendResponse } from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { userService } from '../user/user.service'

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


const signIn = catchAsync(async (req: Request, res: Response) => {
  const loginInfo = req.body
  const {user, token} = await authService.SignInDb(loginInfo);
  const {
    _id,
    name,
    email,
    password,
    phone,
    address,
    role,
    createdAt,
    updatedAt,
    __v,
    ...otherFields
  } = user;

  const responseData = {
    _id,
    name,
    email,
    password,
    phone,
    address,
    role
  };


    sendResponse(res, {
        success:true,
        statusCode:httpStatus.OK,
        message:"User logged in successfully",
        token:token, 
        data:responseData
    })
})

export const authController = {
  signIn,
   createUser
}
  