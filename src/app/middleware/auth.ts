/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload }  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import config from '../config';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import { userModel } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsynch';

const auth = (Crole:string)=>{
return catchAsync(
    async(req:Request, res:Response, next:NextFunction)=>{
        const token = req.headers.authorization.split(" ")[1];
         jwt.verify(token, (config?.secret as string),async (err, decode)=>{
            if(err){
                throw new AppError(httpStatus.UNAUTHORIZED, "You Are not logged in!")
            }
            // check is if user ?
            const {email, role} = decode;
            if(! await userModel.isUser(email)){
                throw new AppError(httpStatus.NOT_FOUND, "User does not Exists!")
            }
            //  check is the user is admin 
            if(! await userModel.isAdmin({email, role:Crole})){
                throw new AppError(httpStatus.UNAUTHORIZED, "Requested For unAuthorised access !")
            }
            
            req.user = decode as JwtPayload;
            next()
         } )
    
        
        
    
    
    }
    
)

}
export default auth ;