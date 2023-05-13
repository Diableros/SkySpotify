import ky, { KyResponse, Options } from 'ky'
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

  const customOptions: Options = {
    // hooks: {
    //   beforeRequest: [
    //     (request) => {
    //       const refreshToken = window.localStorage.getItem('refreshToken')
    //       if (refreshToken)
    //         request.headers.set('Authorization', `Bearer ${refreshToken}`)
    //       console.log('Заголовок авторизации проставлен')
    //     },
    //   ],
    // },
  }

  if (body) Object.assign(options, { json: { ...body }, ...customOptions })

  // console.log('options: ', JSON.stringify(options))

  const response: KyResponse = await kyApi[method](
    requestEndpoint,
    options
  ).json()

  return response as T
}

export default req
