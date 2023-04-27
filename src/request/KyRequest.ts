import ky from 'ky'
import sleep from '@/helpers/sleep'
import { TrackType } from '@/types'

const BASE_API_URL = 'https://painassasin.online/'

const req = async (): Promise<TrackType[]> => {
  await sleep(3000)

  const res = (await ky(
    `${BASE_API_URL}catalog/track/all/`
  ).json()) as TrackType[]

  return res
}

export default req
