type UserLoginCredentionals = {
  password: string
  email: string
}

type UserSignUpCredentionals = {
  username: string
  email: string
  password: string
}

export type ApiRequestType = UserLoginCredentionals | UserSignUpCredentionals

export type UserLoginSuccessType = {
  id: number
  username: string
  password: string
  first_name: string
  last_name: string
  email: string
}

type UserLoginUnauthorizedType = {
  detail: string
}

export type ApiResponseType = UserLoginSuccessType & UserLoginUnauthorizedType
