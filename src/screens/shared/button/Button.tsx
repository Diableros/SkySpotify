import s from './Button.module.scss';
import clsx from 'clsx';

export enum ButtonStyle {
	Purple = 'purple',
	White = 'white',
}

export enum ButtonTitle {
	Login = 'Войти',
	Reg = 'Зарегистрироваться',
}

type ButtonStyleType = {
	style: ButtonStyle;
	title: ButtonTitle;
	action: React.MouseEventHandler;
};

const Button = ({ style, title, action }: ButtonStyleType) => {
	return (
		<button
			className={clsx(
				s.btn,
				style === ButtonStyle.Purple && s['btn--purple'],
				style === ButtonStyle.White && s['btn--white']
			)}
			onClick={action}
		>
			{title}
		</button>
	);
};

export default Button;
