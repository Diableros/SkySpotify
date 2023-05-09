import ky, { Hooks, HTTPError, KyResponse, Options } from 'ky'
import sleep from '@/helpers/sleep'
import BASE_API_URL from './constants'
import { EndpointsType } from '../queries'
import paramInsert from '../helpers/paramInsert'
import { ApiRequestType } from '../apiTypes'

const REQUEST_DELAY = 0

type ArgumentsType = {
  method: 'get' | 'post' | 'delete'
  endpoint: EndpointsType
  param?: string
  body?: ApiRequestType
  hooks?: Hooks
}

const kyApi = ky.create({
  prefixUrl: BASE_API_URL,
})

async function req<T>({
  method,
  endpoint,
  param,
  body,
}: ArgumentsType): Promise<T> {
  await sleep(REQUEST_DELAY * 1000)

  const requestEndpoint = param ? paramInsert(endpoint, param) : endpoint

  const options: Options = {
    // hooks: {
    //   afterResponse: [
    //     (_request, _options, response) => {
    //       if (response.status === 401) {
    //         response.json().then((data) => console.log(data))
    //       } else {
    //         console.log(response.statusText)
    //       }
    //     },
    //   ],
    // },
  }

  if (body) Object.assign(options, { json: body })

  const response: KyResponse = await kyApi[method](
    requestEndpoint,
    options
  ).json()

  return response as T
}

export default req
