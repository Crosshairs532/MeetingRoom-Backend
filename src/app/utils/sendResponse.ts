import { Response } from 'express'

export type Tres<T> = {
  success: boolean
  statusCode: number
  message: string
  data: T
}

export const sendResponse = <T>(res: Response, resObj: Tres<T>) => {
  return res.json({
    success: resObj.success,
    statusCode: resObj.statusCode,
    message: resObj.message,
    data: resObj.data,
  })
}
