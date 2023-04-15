import * as React from 'react'
import HeaderButton from './components/HeaderButton'
import { ButtonsEnum } from './constants'
import { useAppSelector } from '@/hooks/reduxHooks'
import { RootStateType } from '@/store'
import getSearchOptionsList from './helpers/getSearchOptionsList'
import { SearchButtonsType } from './type'

const HeaderButtonsGroup = () => {
  const [activeButton, setActiveButton] =
    React.useState<SearchButtonsType | null>(null)

  const { trackList } = useAppSelector((state: RootStateType) => state.app)

  return (
    <>
      {[...Object.keys(ButtonsEnum)].map((key) => {
        const currentButton = key as SearchButtonsType

        return (
          <HeaderButton
            key={currentButton}
            name={ButtonsEnum[currentButton]}
            isActive={activeButton === currentButton}
            onClick={() => setActiveButton(currentButton)}
            resetButtons={() => setActiveButton(null)}
            optionsList={getSearchOptionsList(currentButton, trackList)}
          />
        )
      })}
    </>
  )
}

export default HeaderButtonsGroup
