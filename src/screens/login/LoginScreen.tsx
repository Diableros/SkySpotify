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
import useSignUp from '@/queryService/qieryHooks/useSignUp'

const LoginScreen = () => {
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false)

  const {
    data: loginData,
    mutate: userLogin,
    isLoading: userLoginWait,
    error: loginError,
    status: loginStatus,
    failureReason,
  } = useLogin()

  const {
    data: signUpData,
    mutate: userSignUp,
    isLoading: userSignUpWait,
    error: signUpError,
    status: signUpStatus,
  } = useSignUp()

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<LoginFieldsType>({
    mode: 'onTouched',
  })

  const isSubmitButtonDisable = Object.keys(errors).length > 0 || userLoginWait
  const isSignUpButtonDisable = Object.keys(errors).length > 0 || userSignUpWait

  const onSubmit: SubmitHandler<ApiRequestType> = ({ email, password }) => {
    // console.log(loginFormdata)
    if (isSignUp) {
      userSignUp({ username: email, email, password })
    } else {
      userLogin({ email, password })
    }
  }

  React.useEffect(() => {
    console.log('Login data', failureReason)
    console.log('SignUp data', signUpData)
  }, [failureReason, signUpData])

  React.useEffect(() => {
    if (loginStatus === 'error' && loginError) {
      console.log(loginData)
      switch ((loginError as HTTPError).response.status) {
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
            message: ErrorText.UnknownError,
          })
          break
      }
    }
  }, [loginStatus, loginError, setError, loginData])

  React.useEffect(() => {
    if (signUpStatus === 'error' && signUpError) {
      switch ((signUpError as HTTPError).response.status) {
        case 400:
          setError(
            'email',
            {
              type: 'focus',
              message: ErrorText.SignUpFiled,
            },
            { shouldFocus: true }
          )
          break

        default:
          setError('email', {
            type: 'custom',
            message: ErrorText.UnknownError,
          })
          break
      }
    }
  }, [signUpStatus, signUpError, setError])

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
        {isSignUp ? (
          <LoginFormInput
            register={register}
            inputError={errors[FieldsList.PasswordConfirm]}
            {...FIELDS[FieldsList.PasswordConfirm]}
          />
        ) : null}
      </div>
      <div className={s['form__button-box']}>
        {isSignUp ? (
          <Button
            style={ButtonStyle.Purple}
            title={userSignUpWait ? 'Отправка данных...' : 'Зарегистрироваться'}
            action={() => console.log('Регистрация')}
            disabled={isSignUpButtonDisable}
          />
        ) : (
          <>
            <Button
              style={ButtonStyle.Purple}
              title={userLoginWait ? 'Логинимся...' : 'Войти'}
              disabled={isSubmitButtonDisable}
            />
            <Button
              style={ButtonStyle.White}
              title="Зарегистрироваться"
              action={() => {
                clearErrors()
                setIsSignUp(true)
              }}
            />
          </>
        )}
      </div>
    </form>
  )
}

export default LoginScreen
