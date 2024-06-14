import { isConfirm } from './booking.interface';
import { z } from "zod"




const createValidationSchema = z.object({
    date: z.string(),
    slots: z.array(z.string()),
    room: z.string(),
    user: z.string()
})
const updateValidationSchema = z.object({
    date: z.string().optional(),
    slots: z.array(z.string()).optional(),
    room: z.string().optional(),
    user: z.string().optional(),
    totalAmount:z.number().optional(),
    isConfirm:z.string().optional(),
    isDeleted:z.boolean().optional()
})
const deleteValidationSchema = z.object(
    {
        isDeleted:z.boolean().optional()
})

export const bookingValidation = {
createValidationSchema,
updateValidationSchema,
deleteValidationSchema

}