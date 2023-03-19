import ky from 'ky'

const BASE_API_URL = 'https://painassasin.online/'

const req = async (): Promise<SongType[]> => {
  const res = (await ky(
    `${BASE_API_URL}catalog/track/all/`
  ).json()) as SongType[]

  return res
}

export default req
