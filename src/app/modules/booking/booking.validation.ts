import { z } from "zod"




const createValidationSchema = z.object({
        date: z.string(),
        slots: z.array(z.string()),
        room: z.string(),
        user: z.string()
})

export const bookingValidation = {
createValidationSchema

}