import { UserDataType } from '@/store/userSlice'

export type SongType = {
  id: number
  name: string
  author: string
  release_date: string
  genre: string
  duration_in_seconds: number
  album: string
  logo: null
  track_file: string
  stared_user: UserDataType
}
