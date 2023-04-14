import * as React from 'react'
import HeaderButton from './components/HeaderButton'
import { ButtonType } from './constants'
import { useAppSelector } from '@/hooks/reduxHooks'
import { RootStateType } from '@/store'
import getSearchOptionsList from './helpers/getSearchOptionsList'

const HeaderButtonsGroup = () => {
  const [activeButton, setActiveButton] = React.useState<ButtonType | null>(
    null
  )

  const { trackList } = useAppSelector((state: RootStateType) => state.app)

  return [...Object.keys(ButtonType)].map((key) => {
    // не придумал как сделать чтоб ТС не ругался на 22й :(
    const currentButton = key as ButtonType

    return (
      <HeaderButton
        key={currentButton}
        name={ButtonType[currentButton]}
        isActive={activeButton === currentButton}
        onClick={() => setActiveButton(currentButton)}
        resetButtons={() => setActiveButton(null)}
        optionsList={getSearchOptionsList(trackList, currentButton)}
      />
    )
  })
}

export default HeaderButtonsGroup
