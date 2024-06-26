/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { ZodError } from "zod";
import { TErrorSource } from "../interface/error.interface";
import { handleZodError } from "../errors/handleZodError";
import AppError from "../errors/AppError";
import { sendResponse } from "../utils/sendResponse";
import { handleCastError } from "../errors/handleCastError";
import { handleValidationError } from "../errors/handleValidationError";

const globalError:ErrorRequestHandler = (err, req, res, next)=>{
    let statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR || 500;
    let message =  'Something went Wrong';
    let errorMessages: TErrorSource = [
      {
        path: '',
        message: 'Something went wrong',
      },
    ];
    if(err instanceof ZodError){
        const handleZod = handleZodError(err);
        statusCode = handleZod.statusCode
        message = handleZod.message
        errorMessages = handleZod.errorMessages
    }
   else if(err.message == 'No Data Found'){
      return sendResponse(res, {
        success:false,
        statusCode:404,
        message:"No Data Found",
        data: []
    })
    }
  else if(err.code === 11000 ){
    return res.status(statusCode).json({
      success: false,
      message:err.errorResponse.errmsg,
      errorMessages:[
       {
        path:"",
        message:err.errorResponse.errmsg,
       }
      ],
      stack: err.stack

    })
  }
  else if (err.name == "CastError"){
    const handleCast = handleCastError(err)
    message = handleCast.message
    errorMessages= handleCast.errorMessages
  }
  else if (err.name == 'ValidationError'){
    const handleValidation = handleValidationError(err);
    message = handleValidation.message
    errorMessages = handleValidation.errorMessages
  }

    return res.status(statusCode).json({
        success: false,
        message:message,
        errorMessages,
        stack: err.stack
      });
}

export default globalError; 