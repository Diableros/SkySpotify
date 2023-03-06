import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { toggleShowMenu } from '@/store/interfaceSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import LogoutButton from '../logoutButton/LogoutButton';
import s from './Menu.module.scss';
import logo from '@/img/logo_white.svg';
import sprite from '@/img/sprite.svg';

const Menu = () => {
  const dispatch = useAppDispatch();
  const showMenu = useAppSelector((state) => state.interface.showMenu);

  return (
    <nav className={s.menuBox}>
      <Link to="/">
        <img className={s.logoSvg} src={logo} alt="Skypro logo" />
      </Link>
      <div
        tabIndex={0}
        role="button"
        className={s.burger}
        onClick={() => dispatch(toggleShowMenu())}
      >
        <span />
      </div>
      <div className={clsx(s.slider, showMenu && s.sliderShow)}>
        <Link to="/">Главная</Link>
        <Link to="/">Мои треки</Link>
        <LogoutButton />
        <svg className={s.themeSvg}>
          <use xlinkHref={`${sprite}#icon-theme`} />
        </svg>
      </div>
    </nav>
  );
};

export default Menu;
