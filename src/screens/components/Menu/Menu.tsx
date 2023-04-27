import * as React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '@/providers/Theme'
import LogoutButton from '../LogoutButton/LogoutButton'
import s from './Menu.module.scss'
import * as S from './Menu.style'
import logoDarkTheme from '@/img/logo_white.svg'
import logoLightTheme from '@/img/logo.svg'
import { LinkPath } from '@/providers/routes'
import Theme from '@/theme/enums'
import Icon from '../Icon'
import GetIcon from '../Icon/enum'

const Menu = () => {
  const { currentTheme, toggleTheme } = React.useContext(ThemeContext)
  const [isMenuShow, setIsMenuShow] = React.useState<boolean>(false)

  const toggleMenuShow = () => {
    setIsMenuShow((prevShowMenuState) => !prevShowMenuState)
  }

  return (
    <nav className={s.menuBox}>
      <Link to="/">
        <img
          className={s.logoSvg}
          src={currentTheme === Theme.Dark ? logoDarkTheme : logoLightTheme}
          alt="Skypro logo"
        />
      </Link>
      <S.Burger tabIndex={0} role="button" onClick={toggleMenuShow}>
        <span />
      </S.Burger>
      <S.Slider isMenuShow={isMenuShow}>
        <Link to="/">Главная</Link>
        <Link to={LinkPath.Favorites}>Мои треки</Link>
        <Link to={LinkPath.Test404}>Page 404 test</Link>
        <LogoutButton />
        <Icon
          icon={
            currentTheme === Theme.Dark ? GetIcon.ThemeDark : GetIcon.ThemeLight
          }
          size={40}
          onClick={() =>
            toggleTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light)
          }
        />
      </S.Slider>
    </nav>
  )
}

export default Menu
