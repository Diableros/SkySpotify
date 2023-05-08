import ky, { KyResponse } from 'ky'
import sleep from '@/helpers/sleep'
import BASE_API_URL from './constants'
import { EndpointsType } from '../queries'
import paramInsert from '../helpers/paramInsert'
import { ApiRequest } from '../apiTypes'

type ArgumentsType = {
  method: 'get' | 'post' | 'delete'
  endpoint: EndpointsType
  param?: string
  body?: ApiRequest
}

async function req<T>({
  method,
  endpoint,
  param,
  body,
}: ArgumentsType): Promise<T> {
  await sleep(3000)

  const requestEndpoint = param ? paramInsert(endpoint, param) : endpoint
  const requestBody = body || {}

  const res: KyResponse = await ky[method](
    `${BASE_API_URL}${requestEndpoint}`,
    requestBody
  ).json()

  return res as T
}

export default req
