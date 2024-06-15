import mongoose from "mongoose";

export const handleValidationError = (err:mongoose.Error.ValidationError)=>{
    const errorMessages  = Object.values(err.errors).map((error)=> (
        {
            path:error.path,
            message:error.message
        }
    ))
    return {
        message:err.name,
        errorMessages 
    }
}