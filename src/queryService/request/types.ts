import { Options } from 'ky'
import { ApiRequestType } from '../apiTypes'
import { EndpointsType } from '../queries'

export type ReqArgumentsType = {
  method: 'get' | 'post' | 'delete'
  endpoint: EndpointsType
  param?: string
  body?: ApiRequestType
  options?: Options
}
