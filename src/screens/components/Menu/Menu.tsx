import * as React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import LogoutButton from '../LogoutButton/LogoutButton'
import s from './Menu.module.scss'
import logo from '@/img/logo_white.svg'
import sprite from '@/img/sprite.svg'

const Menu = () => {
  const [isMenuShow, setIsMenuShow] = React.useState<boolean>(false)

  const toggleMenuShow = () => {
    setIsMenuShow((prevShowMenuState) => !prevShowMenuState)
  }

  return (
    <nav className={s.menuBox}>
      <Link to="/">
        <img className={s.logoSvg} src={logo} alt="Skypro logo" />
      </Link>
      <div
        tabIndex={0}
        role="button"
        className={s.burger}
        onClick={toggleMenuShow}
      >
        <span />
      </div>
      <div className={clsx(s.slider, isMenuShow && s.sliderShow)}>
        <Link to="/">Главная</Link>
        <Link to="/favorites">Мои треки</Link>
        <LogoutButton />
        <svg className={s.themeSvg}>
          <use xlinkHref={`${sprite}#icon-theme`} />
        </svg>
      </div>
    </nav>
  )
}

export default Menu
