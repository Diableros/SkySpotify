import ky, { KyResponse } from 'ky'
import sleep from '@/helpers/sleep'
import BASE_API_URL from './constants'
import { EndpointsType } from '../queries'
import paramInsert from '../helpers/paramInsert'

async function req<T>(
  method: 'get' | 'post' | 'delete',
  endpoint: EndpointsType,
  param?: string
): Promise<T> {
  await sleep(3000)

  const finalEndpoint = param ? paramInsert(endpoint, param) : endpoint

  const res: KyResponse = await ky[method](
    `${BASE_API_URL}${finalEndpoint}`
  ).json()

  return res as T
}

export default req
