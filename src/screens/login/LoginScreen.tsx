import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import logo from '@/img/logo.svg'
import s from './LoginScreen.module.scss'
import { userLogin } from '@/store/userSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'
import Button, { ButtonStyle } from '../components/Button/Button'
import { LoginFieldsType, FieldsList } from './types'
import LoginFormInput from './components/LoginInput/LoginFormInput'
import FIELDS from './formFields'

const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = React.useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginFieldsType>({
    mode: 'onTouched',
  })

  const isButtonsDisabled = Object.keys(errors).length > 0

  const onSubmit: SubmitHandler<LoginFieldsType> = (data) => {
    // just for probe
    alert(JSON.stringify(data))
    dispatch(
      userLogin({
        login: true,
        id: 1,
        email: data.email,
        token: 'blablabla',
        userName: data.email,
      })
    )

    navigate('/')
  }

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
