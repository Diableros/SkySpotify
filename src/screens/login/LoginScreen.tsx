import Button, { ButtonStyle, ButtonTitle } from '../shared/button/Button';
import s from './LoginScreen.module.scss';
import logo from 'img/logo.svg';

const LoginScreen = () => {
	const handleButtonClick: React.MouseEventHandler = (e) => {
		const target = e.target as HTMLElement;
		console.log(`Click on "${target.innerHTML}"`);
	};

	const handleFormSubmit: React.FormEventHandler = (e) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		console.log('Form submit prevent', form.children);
	};

	return (
		<form className={s.form} onSubmit={handleFormSubmit}>
			<img src={logo} />
			<div className={s['form__input-box']}>
				<input className={s.form__input} type="text" placeholder="Логин" />
				<input className={s.form__input} type="password" placeholder="Пароль" />
			</div>
			<div className={s['form__button-box']}>
				<Button
					style={ButtonStyle.Purple}
					title={ButtonTitle.Login}
					action={handleButtonClick}
				/>
				<Button
					style={ButtonStyle.White}
					title={ButtonTitle.Reg}
					action={handleButtonClick}
				/>
			</div>
		</form>
	);
};

export default LoginScreen;
