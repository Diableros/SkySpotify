import { Options } from 'ky'
import { AuthRequestType } from '../apiTypes'
import { EndpointsType } from '../queries'

export enum ReqMethod {
  Get = 'get',
  Post = 'post',
  Delete = 'delete',
}

export type ReqArgumentsType = {
  method: ReqMethod
  endpoint: EndpointsType
  param?: string
  body?: AuthRequestType
  options?: Options
}
