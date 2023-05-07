import { FieldValues } from 'react-hook-form'
import { FieldsList, FieldsType, LoginFieldsType } from './types'
import { FieldLength, PlaceholderText, ErrorText } from './constants'

const EMAIL_REG_EXP =
  /^(([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{0})@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/

const PASSWORD_REG_EXP = /^[a-zA-Z0-9]+$/

const passwordsCompare = (
  confirmPassword: LoginFieldsType[FieldsList.PasswordConfirm],
  { [FieldsList.Password]: password }: FieldValues
) => confirmPassword === password || ErrorText.MismatchPasswords

const PASSWORD_REQUIREMENTS = {
  required: ErrorText.Required,
  minLength: {
    value: Number(FieldLength.PasswordMinLength),
    message: `${ErrorText.ShortPassword} (min: ${FieldLength.PasswordMinLength}) `,
  },
  maxLength: {
    value: Number(FieldLength.PasswordMaxLength),
    message: `${ErrorText.LongPassword} (max: ${FieldLength.PasswordMaxLength})`,
  },
  pattern: PASSWORD_REG_EXP,
}

const FIELDS: FieldsType = {
  email: {
    type: 'email',
    name: FieldsList.Email,
    placeholder: PlaceholderText.Email,
    registerOptions: {
      required: ErrorText.Required,
      minLength: {
        value: Number(FieldLength.EmailMinLength),
        message: `${ErrorText.ShortEmail} (min: ${FieldLength.EmailMinLength})`,
      },
      maxLength: {
        value: Number(FieldLength.EmailMaxLength),
        message: `${ErrorText.LongEmail} (min: ${FieldLength.EmailMaxLength})`,
      },
      pattern: EMAIL_REG_EXP,
    },
  },

  password: {
    type: 'password',
    name: FieldsList.Password,
    placeholder: PlaceholderText.Password,
    registerOptions: { ...PASSWORD_REQUIREMENTS },
  },

  passwordConfirm: {
    type: 'password',
    name: FieldsList.PasswordConfirm,
    placeholder: PlaceholderText.PasswordConfirm,
    registerOptions: {
      ...PASSWORD_REQUIREMENTS,
      validate: passwordsCompare,
    },
  },
}

export default FIELDS
