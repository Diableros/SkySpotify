import s from './Button.module.scss';
import clsx from 'clsx';

export enum ButtonStyle {
	Purple = 'purple',
	White = 'white',
}

type ButtonStyleType = {
	style: ButtonStyle;
	title: string;
	action?: React.MouseEventHandler;
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
