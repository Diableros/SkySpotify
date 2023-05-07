import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'
import { InputObjectType } from '../../types'
import * as S from './LoginFormInput.style'

const INPUT_UNKNOWN_ERROR = 'Недопустимое значение'
const LoginFormInput = ({
  type,
  name,
  placeholder,
  inputError,
  register,
  registerOptions,
}: InputObjectType) => {
  if (register)
    return (
      <S.FormInputWrapper>
        <S.FormInput
          type={type}
          placeholder={placeholder}
          {...register(name, { ...registerOptions })}
        />
        {inputError ? (
          <S.FormInputError>
            <Icon icon={IconSprite.Alert} size="14px" />
            {inputError?.message || INPUT_UNKNOWN_ERROR}
          </S.FormInputError>
        ) : null}
      </S.FormInputWrapper>
    )

  return null
}

export default LoginFormInput
