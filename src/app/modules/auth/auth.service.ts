import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { userModel } from "../user/user.model"
import { TSignIn } from "./auth.interface"
import  jwt  from 'jsonwebtoken';

const SignInDb = async (payload:TSignIn) => {

    // check if the user exists 
    const user = await userModel.findOne({email:payload.email});
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "This user does not exists!")
    }
    const token = 


    return user;



}

export const authService = {
  SignInDb,
}
