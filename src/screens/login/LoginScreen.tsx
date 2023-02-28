import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form/dist/types';
import Button, { ButtonStyle } from '../shared/button/Button';
import logo from 'img/logo.svg';
import s from './LoginScreen.module.scss';
import Snack from 'screens/shared/snack/Snack';

const LoginScreen = () => {
	const [isRegister, setIsRegister] = React.useState<Boolean>(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFieldsType>();

	const onSubmit: SubmitHandler<LoginFieldsType> = (data) => {
		console.log('Handle form data processing: ' + JSON.stringify(data));
		navigate('main/');
	};

	return (
		<>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<a href="/">
					<img src={logo} />
				</a>
				<div className={s['form__input-box']}>
					<input
						className={s.form__input}
						type="text"
						placeholder="e-mail"
						{...register('email', {
							required: '(длина 4-20 символов)',
							minLength: 4,
							maxLength: 20,
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
	);
};

export default LoginScreen;
