import * as React from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useNavigate } from 'react-router-dom'
import useLogin from '@/queryService/qieryHooks/useLogin'
import { ApiRequestType } from '@/queryService/apiTypes'
import logo from '@/img/logo.svg'
import Button, { ButtonStyle } from '../components/Button/Button'
import LoginFormInput from './components/LoginInput/LoginFormInput'
import FIELDS from './formFields'
import s from './LoginScreen.module.scss'
import { FieldsList, LoginFieldsType } from './types'

const LoginScreen = () => {
  const [isRegister, setIsRegister] = React.useState<boolean>(false)
  const [loginFieldsData, setLoginFieldsData] = React.useState<ApiRequestType>()
  // const dispatch = useAppDispatch()
  const { data, isLoading, isError, error } = useLogin(loginFieldsData)

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginFieldsType>({
    mode: 'onTouched',
  })

  const isButtonsDisabled = Object.keys(errors).length > 0

  const onSubmit: SubmitHandler<ApiRequestType> = (loginFormdata) => {
    setLoginFieldsData(loginFormdata)
  }

  React.useEffect(() => console.log('error: ', error), [error])

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
        {isRegister ? (
          <LoginFormInput
            register={register}
            inputError={errors[FieldsList.PasswordConfirm]}
            {...FIELDS[FieldsList.PasswordConfirm]}
          />
        ) : null}
      </div>
      <div className={s['form__button-box']}>
        {isRegister ? (
          <Button
            style={ButtonStyle.Purple}
            title="Зарегистрироваться"
            action={() => console.log('Регистрация')}
            disabled={isButtonsDisabled}
          />
        ) : (
          <>
            <Button
              style={ButtonStyle.Purple}
              title="Войти"
              action={() => console.log('Вход')}
              disabled={isButtonsDisabled}
            />
            <Button
              style={ButtonStyle.White}
              title="Зарегистрироваться"
              disabled={isButtonsDisabled}
              action={() => {
                clearErrors()
                setIsRegister(true)
              }}
            />
          </>
        )}
      </div>
    </form>
  )
}

export default LoginScreen
