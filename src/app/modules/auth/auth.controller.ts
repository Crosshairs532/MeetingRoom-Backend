import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsynch'
import { authService } from './auth.service'
import { sendResponse } from '../../utils/sendResponse'
import httpStatus from 'http-status'

const signIn = catchAsync(async (req: Request, res: Response) => {
  const loginInfo = req.body
  const loggedUser = await authService.SignInDb(loginInfo);
    sendResponse(res, {
        success:true,
        statusCode:httpStatus.OK,
        message:"User logged in successfully",
        token:, 
        data:loggedUser;
    })
})

export const authController = {
  signIn,
}
