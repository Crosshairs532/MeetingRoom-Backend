import { Response } from 'express'

export type Tres<T> = {
  success: boolean
  statusCode: number
  message: string
  data: T
  token?:string
}

export const sendResponse = <T>(res: Response, resObj: Tres<T>) => {
  const response = {
    success: resObj.success,
    statusCode: resObj.statusCode,
    message: resObj.message,
    data: resObj.data,
  }

  if(resObj?.token){
    response.token = resObj.token;
  }
  return res.json(response)

}
