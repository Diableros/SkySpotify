import * as React from 'react'
import HeaderButton from './HeaderButton/HeaderButton'
import { ButtonType } from './HeaderButton/constants'
import s from './MainHeader.module.scss'

const MainHeader = () => {
  const [activeButton, setActiveButton] = React.useState<ButtonType | null>(
    null
  )

  return (
    <div className={s.header}>
      <h1 className={s.title}>Треки</h1>
      <div className={s.sortBox}>
        <p className={s.sortBoxtext}>Искать по:</p>
        <HeaderButton
          variant={ButtonType.Author}
          isActive={activeButton === ButtonType.Author}
          onClick={() => setActiveButton(ButtonType.Author)}
        />
        <HeaderButton
          variant={ButtonType.Year}
          isActive={activeButton === ButtonType.Year}
          onClick={() => setActiveButton(ButtonType.Year)}
        />
        <HeaderButton
          variant={ButtonType.Genre}
          isActive={activeButton === ButtonType.Genre}
          onClick={() => setActiveButton(ButtonType.Genre)}
        />
      </div>
    </div>
  )
}

export default MainHeader
