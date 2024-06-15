
export const handleCastError = (err)=>{
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