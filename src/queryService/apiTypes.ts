type UserResponseType = {
  password: string
  email: string
}

type UserSignUpCredentionals = {
  username: string
  email: string
  password: string
}

export type AuthRequestType = UserResponseType | UserSignUpCredentionals

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

export type AuthResponseType = UserLoginSuccessType &
  UserLoginUnauthorizedType &
  UserSignUpPasswordErrorType

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
