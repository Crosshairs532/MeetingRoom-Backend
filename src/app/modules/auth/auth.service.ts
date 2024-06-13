import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { userModel } from "../user/user.model"
import { TSignIn } from "./auth.interface"
import  jwt  from 'jsonwebtoken';
import config from "../../config";
import { TUser } from "../user/user.interface";

const SignInDb = async (payload:TSignIn) => {

    // check if the user exists 
    const user = await userModel.findOne({email:payload.email});
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "This user does not exists!")
    }

    const jwtPayload = {
        email:user.email, role:user.role
    }
    const token =  jwt.sign(jwtPayload, (config.secret as string)  , {expiresIn:'1d'});



    return {
        user, token
    };



}

const createUserDb = async (userData: TUser) => {
    return await userModel.create(userData)
  }
  

export const authService = {
  SignInDb,
  createUserDb
}
