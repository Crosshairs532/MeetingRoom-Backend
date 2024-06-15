import mongoose from "mongoose"

export const handleCastError = (err:mongoose.Error.CastError)=>{
    const errorMessages = [
        {
            path:err.path,
            message:err.message
        }
    ]
    const message = err.name 

    return {
        message,
        errorMessages
    }

}