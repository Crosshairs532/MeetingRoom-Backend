/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload }  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import config from '../config';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import { userModel } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsynch';

const auth = (...AllRoles : string[])=>{
return catchAsync(
    async(req:Request, res:Response, next:NextFunction)=>{
        const token = req.headers.authorization.split(" ")[1];
        // console.log({token})
         const decoder =  jwt.verify(token, (config?.secret as string))
         const  {email , role}  = decoder as JwtPayload ; 
          
        // user not in Db
        if(! await userModel.isUser(email)){
            throw new AppError(httpStatus.NOT_FOUND, "User does not Exists!")
        }
    
        //  check is the user is user 
        if( AllRoles && !AllRoles.includes(role) ){
            throw new AppError(httpStatus.UNAUTHORIZED, "Requested For unAuthorised access !")
        }
        console.log({decoder})
        req.user = decoder as JwtPayload;
        next()
    } ) 
    }
    

export default auth ;