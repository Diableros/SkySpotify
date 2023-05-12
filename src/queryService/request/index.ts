import ky, { KyResponse } from 'ky'
import sleep from '@/helpers/sleep'
import BASE_API_URL from './constants'
import paramInsert from '../helpers/paramInsert'
import { ReqArgumentsType } from './types'

// =========== FOR LOADERS DEMO ============
const REQUEST_DELAY = 1
// ======== END OF FOR LOADERS DEMO ========

const kyApi = ky.create({
  prefixUrl: BASE_API_URL,
})

async function req<T>({
  method,
  endpoint,
  param,
  body,
  options = {},
}: ReqArgumentsType): Promise<T> {
  await sleep(REQUEST_DELAY * 1000)

  const requestEndpoint = param ? paramInsert(endpoint, param) : endpoint

  // const options: Options = {
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
  // }

  if (body) Object.assign(options, { json: body })

  const response: KyResponse = await kyApi[method](
    requestEndpoint,
    options
  ).json()

  return response as T
}

export default req
