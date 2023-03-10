import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonStyle } from 'screens/shared/button/Button';
import s from './NotFoundScreen.module.scss';
import smileCrying from 'img/smileCrying.png';

const NotFoundScreen = () => {
	const navigate = useNavigate();

	return (
		<main className={s._}>
			<h1 className={s._title}>404</h1>
			<h2 className={s._subTitle}>
				Страница не найдена <img src={smileCrying} alt="Crying smile" />
			</h2>
			<p className={s._text}>
				Возможно, она была удалена или перенесена на другой адрес
			</p>
			<Button
				style={ButtonStyle.Purple}
				title="Вернуться на главную"
				action={() => navigate('/')}
			/>
		</main>
	);
};

export default NotFoundScreen;
