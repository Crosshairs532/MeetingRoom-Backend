import { ZodError } from "zod"

export const handleZodError = (err:ZodError)=>{
    const statusCode  = 400;
    const  errorMessages = err.issues.map((issue)=>
    {  return {
            path:issue.path,
            message:issue.message 
            }})
    return {
        statusCode,
        errorMessages,
        message:'Zod Validation Error'
    }
}