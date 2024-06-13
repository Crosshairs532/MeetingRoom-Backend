import { TUser } from './user.interface'
import { userModel } from './user.model'

const createUserDb = async (userData: TUser) => {
  return await userModel.create(userData)
}

export const userService = {
  createUserDb,
}
