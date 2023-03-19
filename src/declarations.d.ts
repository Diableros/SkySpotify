type LoginFieldsType = {
  email: string
  password: string
  passwordConfirm?: string
}

type UserDataType = {
  id: id
  username: string
  first_name: string
  last_name: string
  email: string
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
