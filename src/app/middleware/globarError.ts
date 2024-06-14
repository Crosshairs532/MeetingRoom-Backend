/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { ZodError } from "zod";
import { TErrorSource } from "../interface/error.interface";
import { handleZodError } from "../errors/handleZodError";

const globalError:ErrorRequestHandler = (err, req, res, next)=>{
    let statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR || 500;
    let message =  'Something went Wrong';
    let errorSource: TErrorSource = [
      {
        path: '',
        message: 'Something went wrong',
      },
    ];
    if(err instanceof ZodError){
        const handleZod = handleZodError(err);
        statusCode = handleZod.statusCode
        message = handleZod.message
        errorSource = handleZod.errorSource
    }
    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSource,
        stack: err.stack
      });
}

export default globalError; 