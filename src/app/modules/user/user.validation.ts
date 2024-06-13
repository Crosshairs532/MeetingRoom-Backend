import { z } from 'zod'
import { userRoles } from './user.constants'

const createUserValidation = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .trim(),
  email: z
    .string({
      required_error: 'email is required',
    })
    .email(),
  password: z.string({ required_error: 'password is required' }).trim(),
  phone: z.string(),
  address: z.string(),
  role: z.enum(userRoles as [string, ...string[]]),
})

export const userValidation = {
  createUserValidation,
}
