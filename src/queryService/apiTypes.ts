type UserLoginCredentionals = {
  password: string
  email: string
}

export type ApiRequestType = UserLoginCredentionals

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

export type ApiResponseType = UserLoginSuccessType | UserLoginUnauthorizedType
