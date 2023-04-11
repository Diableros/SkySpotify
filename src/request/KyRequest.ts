import ky from 'ky'
import sleep from '@/helpers/sleep'
import { SongType } from '@/types'

const BASE_API_URL = 'https://painassasin.online/'

const req = async (): Promise<SongType[]> => {
  await sleep(3000)

  const res = (await ky(
    `${BASE_API_URL}catalog/track/all/`
  ).json()) as SongType[]

  return res
}

export default req
