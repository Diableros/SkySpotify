import * as React from 'react';
import { Link } from 'react-router-dom';
import s from './Menu.module.scss';
import logo from 'img/logo_white.svg';
import sprite from 'img/sprite.svg';
import LogoutButton from '../logout/LogoutButton';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { toggleShowMenu } from 'store/interfaceSlice';

const Menu = () => {
	const dispatch = useAppDispatch();
	const showMenu = useAppSelector((state) => state.interface.showMenu);

	return (
		<nav className={s.menuBox}>
			<Link to="/">
				<img className={s.logoSvg} src={logo} alt="Skypro logo" />
			</Link>
			<div className={s.burger} onClick={() => dispatch(toggleShowMenu())}>
				<span></span>
			</div>
			<div className={clsx(s.slider, showMenu && s.sliderShow)}>
				<Link to="/">Главная</Link>
				<Link to="/">Мои треки</Link>
				<LogoutButton />
				<svg className={s.themeSvg}>
					<use xlinkHref={sprite + '#icon-theme'} />
				</svg>
			</div>
		</nav>
	);
};

export default Menu;
