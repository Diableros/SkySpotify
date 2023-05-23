import { TrackType } from '@/types'

export type LocalUserType = {
  id: number
  userName: string
  email: string
}

export type UserRequestType = {
  email: string
  password: string
}

type UserSignUpCredentionals = {
  username: string
  email: string
  password: string
}

export type UserCheckTokenType = {
  refresh: string
}

export type AuthRequestType =
  | UserRequestType
  | UserSignUpCredentionals
  | UserCheckTokenType

export type UserLoginSuccessType = {
  id: number
  username: string
  password: string
  first_name: string
  last_name: string
  email: string
}

export type UserLoginUnauthorizedType = {
  detail: string
}

export type UserSignUpPasswordErrorType = {
  password: string
}

export type AuthResponseType =
  | UserLoginSuccessType
  | UserLoginUnauthorizedType
  | UserSignUpPasswordErrorType

export type GetTokenResponseType = {
  refresh: string
  access: string
}

export type GetRefreshResponseType = {
  access: string
}

export type FavoriteResponse = {
  detail: string
}

export type CollectionType = {
  id: number
  items: TrackType[]
  owner: string
  name: string
}
