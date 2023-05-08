import * as React from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { HTTPError } from 'ky'
import useLogin from '@/queryService/qieryHooks/useLogin'
import { ApiRequestType } from '@/queryService/apiTypes'
import logo from '@/img/logo.svg'
import Button, { ButtonStyle } from '../components/Button/Button'
import LoginFormInput from './components/LoginInput/LoginFormInput'
import FIELDS from './formFields'
import s from './LoginScreen.module.scss'
import { FieldsList, LoginFieldsType } from './types'
import { ErrorText } from './constants'

const LoginScreen = () => {
  const [isRegistration, setIsRegistration] = React.useState<boolean>(false)
  const { mutate, isLoading, error, status } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<LoginFieldsType>({
    mode: 'onTouched',
  })

  const isSubmitButtonDisable = Object.keys(errors).length > 0 || isLoading

  const onSubmit: SubmitHandler<ApiRequestType> = (loginFormdata) => {
    mutate(loginFormdata)
  }

  React.useEffect(() => {
    if (status === 'error' && error) {
      switch ((error as HTTPError).response.status) {
        case 401:
          setError(
            'email',
            {
              type: 'focus',
              message: ErrorText.UserNotFound,
            },
            { shouldFocus: true }
          )
          break

        default:
          setError('email', {
            type: 'custom',
            message: 'Пользователь не найден',
          })
          break
      }
    }
  }, [status, error, setError])

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <a href="/">
        <img src={logo} alt="Skyspotify logo" />
      </a>
      <div className={s['form__input-box']}>
        <LoginFormInput
          register={register}
          inputError={errors[FieldsList.Email]}
          {...FIELDS[FieldsList.Email]}
        />
        <LoginFormInput
          register={register}
          inputError={errors[FieldsList.Password]}
          {...FIELDS[FieldsList.Password]}
        />
        {isRegistration ? (
          <LoginFormInput
            register={register}
            inputError={errors[FieldsList.PasswordConfirm]}
            {...FIELDS[FieldsList.PasswordConfirm]}
          />
        ) : null}
      </div>
      <div className={s['form__button-box']}>
        {isRegistration ? (
          <Button
            style={ButtonStyle.Purple}
            title={isLoading ? 'Отправка данных...' : 'Зарегистрироваться'}
            action={() => console.log('Регистрация')}
            disabled={isSubmitButtonDisable}
          />
        ) : (
          <>
            <Button
              style={ButtonStyle.Purple}
              title={isLoading ? 'Логинимся...' : 'Войти'}
              disabled={isSubmitButtonDisable}
            />
            <Button
              style={ButtonStyle.White}
              title="Зарегистрироваться"
              disabled={isSubmitButtonDisable}
              action={() => {
                clearErrors()
                setIsRegistration(true)
              }}
            />
          </>
        )}
      </div>
    </form>
  )
}

export default LoginScreen
