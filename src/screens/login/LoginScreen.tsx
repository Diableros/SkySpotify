import * as React from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { HTTPError } from 'ky'
import { useQueryClient } from '@tanstack/react-query'
import useLogin from '@/queryService/qieryHooks/useLogin'
import { ApiRequestType, ApiResponseType } from '@/queryService/apiTypes'
import logo from '@/img/logo.svg'
import Button, { ButtonStyle } from '../components/Button/Button'
import LoginFormInput from './components/LoginInput/LoginFormInput'
import FIELDS from './formFields'
import s from './LoginScreen.module.scss'
import { FieldsList, LoginFieldsType } from './types'
import useSignUp from '@/queryService/qieryHooks/useSignUp'
import QueryKey from '@/queryService/queryKeys'
import { ErrorText, ButtonTitle } from './constants'

const LoginScreen = () => {
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false)
  const queryClient = useQueryClient()

  const {
    mutate: userLogin,
    isLoading: userLoginWait,
    error: loginError,
    isError: loginIsError,
  } = useLogin()

  const {
    mutate: userSignUp,
    isLoading: userSignUpWait,
    error: signUpError,
    isError: signUpIsError,
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
    if (isSignUp) {
      userSignUp({ username: email, email, password })
    } else {
      userLogin({ email, password })
    }
  }

  const setServerErrorToUseForm = React.useCallback(
    (error: HTTPError) => {
      error.response
        .json()
        .then((responseObj: ApiResponseType) => {
          const fieldWithMessage = Object.keys(responseObj)[0]

          setError(
            fieldWithMessage === 'password'
              ? FieldsList.Password
              : FieldsList.Email,
            {
              type: 'focus',
              message: String(
                responseObj[fieldWithMessage as keyof ApiResponseType] ||
                  ErrorText.UnknownError
              ),
            },
            { shouldFocus: true }
          )
        })
        .catch(() => {})
    },
    [setError]
  )

  React.useEffect(() => {
    if (loginIsError) setServerErrorToUseForm(loginError as HTTPError)
  }, [loginError, loginIsError, setServerErrorToUseForm])

  React.useEffect(() => {
    if (signUpIsError) setServerErrorToUseForm(signUpError as HTTPError)
  }, [signUpError, signUpIsError, setServerErrorToUseForm])

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
            title={
              userSignUpWait
                ? ButtonTitle.SignUpLoader
                : ButtonTitle.SignUpTitle
            }
            disabled={isSignUpButtonDisable}
          />
        ) : (
          <>
            <Button
              style={ButtonStyle.Purple}
              title={
                userLoginWait ? ButtonTitle.LoginLoader : ButtonTitle.LoginTitle
              }
              disabled={isSubmitButtonDisable}
            />
            <Button
              style={ButtonStyle.White}
              title="Зарегистрироваться"
              action={() => {
                queryClient.invalidateQueries({
                  queryKey: [QueryKey.UserLogin],
                })
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
