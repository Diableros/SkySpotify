type LoginFieldsType = {
  email: string
  password: string
  passwordConfirm?: string
}

type SongType = {
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

declare module '*.png'
declare module '*.svg'
declare module '*.module.scss'
