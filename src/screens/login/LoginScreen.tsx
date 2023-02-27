import * as React from 'react';
import Button, { ButtonStyle } from '../shared/button/Button';
import s from './LoginScreen.module.scss';
import logo from 'img/logo.svg';

const LoginScreen = () => {
	const [registartionView, setRegistratoinView] =
		React.useState<Boolean>(false);

	const handleLoginButton: React.MouseEventHandler = (e) => {
		const target = e.target as HTMLElement;
		console.log(`Click on "${target.innerHTML}"`);
	};

	const handleRegistrationButtonClick: React.MouseEventHandler = (e) => {
		const target = e.target as HTMLElement;
		console.log(`Click on "${target.innerHTML}"`);
		setRegistratoinView(true);
	};

	const handleFormSubmit: React.FormEventHandler = (e) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		console.log('Form submit prevent', form);
	};

	return (
		<form className={s.form} onSubmit={handleFormSubmit}>
			<img src={logo} />
			<div className={s['form__input-box']}>
				<input
					className={s.form__input}
					type="text"
					placeholder="Логин"
					name="login"
				/>
				<input
					className={s.form__input}
					type="password"
					placeholder="Пароль"
					name="password"
				/>
				{registartionView ? (
					<input
						className={s.form__input}
						type="password"
						placeholder="Повторите пароль"
						name="confirmPassword"
					/>
				) : null}
			</div>
			<div className={s['form__button-box']}>
				{registartionView ? null : (
					<Button
						style={ButtonStyle.Purple}
						title="Войти"
						action={handleLoginButton}
					/>
				)}
				<Button
					style={registartionView ? ButtonStyle.Purple : ButtonStyle.White}
					title="Зарегистрироваться"
					action={handleRegistrationButtonClick}
				/>
			</div>
		</form>
	);
};

export default LoginScreen;
