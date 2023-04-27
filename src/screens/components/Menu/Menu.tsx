import * as React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ThemeContext } from '@/providers/Theme'
import LogoutButton from '../LogoutButton/LogoutButton'
import s from './Menu.module.scss'
import * as S from './Menu.style'
import logo from '@/img/logo_white.svg'
import sprite from '@/img/sprite.svg'
import { LinkPath } from '@/providers/routes'
import Theme from '@/theme/enums'

const Menu = () => {
  const { currentTheme, toggleTheme } = React.useContext(ThemeContext)
  const [isMenuShow, setIsMenuShow] = React.useState<boolean>(false)

  const toggleMenuShow = () => {
    setIsMenuShow((prevShowMenuState) => !prevShowMenuState)
  }

  return (
    <nav className={s.menuBox}>
      <Link to="/">
        <img className={s.logoSvg} src={logo} alt="Skypro logo" />
      </Link>
      <S.Burger tabIndex={0} role="button" onClick={toggleMenuShow}>
        <span />
      </S.Burger>
      <div className={clsx(s.slider, isMenuShow && s.sliderShow)}>
        <Link to="/">Главная</Link>
        <Link to={LinkPath.Favorites}>Мои треки</Link>
        <Link to={LinkPath.Test404}>Page 404 test</Link>
        <LogoutButton />
        <svg
          className={s.themeSvg}
          onClick={() =>
            toggleTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light)
          }
        >
          <use xlinkHref={`${sprite}#icon-theme`} />
        </svg>
      </div>
    </nav>
  )
}

export default Menu
