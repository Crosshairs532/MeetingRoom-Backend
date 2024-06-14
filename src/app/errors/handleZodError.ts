import { ZodError } from "zod"

export const handleZodError = (err:ZodError)=>{
    const statusCode  = 400;
    const  errorSource = err.issues.map((issue)=>
    {  return {
            path:issue.path,
            message:issue.message 
            }})
    return {
        statusCode,
        errorSource,
        message:'Zod Validation Error'
    }
}