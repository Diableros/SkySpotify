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
	switch (style) {
		case ButtonStyle.Purple:
			return (
				<button className={clsx(s.btn, s['btn--purple'])} onClick={action}>
					{title}
				</button>
			);

		case ButtonStyle.White:
			return (
				<div className={clsx(s.btn, s['btn--white'])} onClick={action}>
					{title}
				</div>
			);

		default:
			return <div>Smth wrong...</div>;
	}
};

export default Button;
