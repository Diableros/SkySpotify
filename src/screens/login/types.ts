import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'

export enum FieldsList {
  Email = 'email',
  Password = 'password',
  PasswordConfirm = 'passwordConfirm',
}

export type LoginFieldsType = {
  email: string
  password: string
  passwordConfirm?: string
}

export type InputObjectType = {
  type: 'email' | 'password'
  name: FieldsList
  placeholder: string
  inputError?: FieldError
  register?: UseFormRegister<LoginFieldsType>
  registerOptions: RegisterOptions
}

export type FieldsType = {
  [key in FieldsList]: InputObjectType
}
