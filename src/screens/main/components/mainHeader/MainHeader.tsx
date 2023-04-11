import * as React from 'react'
import HeaderButton from './HeaderButton/HeaderButton'
import { ButtonType } from './HeaderButton/constants'
import s from './MainHeader.module.scss'
import { useAppSelector } from '@/hooks/reduxHooks'
import { RootStateType } from '@/store'
import getSearchOptionsList from '@/helpers/getSearchOptionsList'

const MainHeader = () => {
  const [activeButton, setActiveButton] = React.useState<ButtonType | null>(
    null
  )

  const trackList = useAppSelector((state: RootStateType) => state.app)

  return (
    <div className={s.header}>
      <h1 className={s.title}>Треки</h1>
      <div className={s.sortBox}>
        <p className={s.sortBoxtext}>Искать по:</p>
        {[...Object.keys(ButtonType)].map((button) => {
          // не придумал как сделать чтоб ТС не ругался на 23й :(
          const currentButton = button as ButtonType

          return (
            <HeaderButton
              key={currentButton}
              variant={ButtonType[currentButton]}
              isActive={activeButton === currentButton}
              onClick={() => setActiveButton(currentButton)}
              resetButtons={() => setActiveButton(null)}
              optionsList={getSearchOptionsList(trackList, currentButton)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MainHeader
