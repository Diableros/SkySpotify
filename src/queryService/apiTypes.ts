type UserLogin = {
  password: string
  email: string
}

export type ApiRequest = UserLogin

export type UserLoginSuccessType = {
  id: number
  username: string
  password: string
  first_name: string
  last_name: string
  email: string
}

type UserLoginUnauthorized = {
  detail: string
}

export type ApiResponse = UserLoginSuccessType | UserLoginUnauthorized
