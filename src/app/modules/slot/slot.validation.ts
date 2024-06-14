import { z } from "zod"

const createSlotValidationSchema = z.object({
    room:z.string(),
    date:z.string(),
    startTime:z.string(),
    endTime:z.string(),
}) 
export const slotValidation = { createSlotValidationSchema}