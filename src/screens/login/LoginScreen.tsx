import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import logo from '@/img/logo.svg'
import s from './LoginScreen.module.scss'
import Snack from '@/screens/components/Snack/Snack'
import { userLogin } from '@/store/userSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'
import Button, { ButtonStyle } from '../components/Button/Button'

const LoginScreen = () => {
  const [isRegister, setIsRegister] = React.useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldsType>()

  const onSubmit: SubmitHandler<LoginFieldsType> = (data) => {
    // just for probe
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
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <a href="/">
          <img src={logo} alt="Skyspotify logo" />
        </a>
        <div className={s['form__input-box']}>
          <input
            className={s.form__input}
            type="email"
            placeholder="e-mail"
            {...register('email', {
              required: '(Нужен формат e-mail)',
              minLength: 4,
              maxLength: 20,
              pattern:
                /^[A-Za-z0-9.]{2,40}@[A-Za-z0-9]{2,40}.[A-Za-z0-9]{2,7}$/,
            })}
          />
          <input
            className={s.form__input}
            type="password"
            placeholder="Пароль"
            {...register('password', {
              required: '(длина 8-30 символов)',
              minLength: 8,
              maxLength: 20,
            })}
          />
          {isRegister ? (
            <input
              className={s.form__input}
              type="password"
              placeholder="Повторите пароль"
              {...register('passwordConfirm', {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
          ) : null}
        </div>
        <div className={s['form__button-box']}>
          {isRegister ? (
            <Button style={ButtonStyle.Purple} title="Зарегистрироваться" />
          ) : (
            <>
              <Button style={ButtonStyle.Purple} title="Войти" />
              <Button
                style={ButtonStyle.White}
                title="Зарегистрироваться"
                action={() => setIsRegister(true)}
              />
            </>
          )}
        </div>
      </form>
      {Object.keys(errors).length > 0 ? (
        <Snack type="error" data={errors} />
      ) : null}
    </>
  )
}

export default LoginScreen
