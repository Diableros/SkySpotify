import * as React from 'react'
import HeaderButton from './components/HeaderButton'
import { searchButtons } from './constants'
import { useAppSelector } from '@/store/hooks/reduxHooks'
import { RootStateType } from '@/store'
import getSearchOptionsList from './helpers/getSearchOptionsList'
import { ButtonType } from './type'

const HeaderButtonsGroup = () => {
  const [activeButton, setActiveButton] = React.useState<
    keyof ButtonType | null
  >(null)

  const { trackList } = useAppSelector((state: RootStateType) => state.app)

  return (
    <>
      {Object.keys(searchButtons).map((key) => {
        const currentButton = key as keyof ButtonType

        return (
          <HeaderButton
            key={currentButton}
            buttonId={currentButton}
            name={searchButtons[currentButton].title}
            isActive={activeButton === currentButton}
            onClick={() => setActiveButton(currentButton)}
            resetButtons={() => setActiveButton(null)}
            optionsList={getSearchOptionsList(
              searchButtons[currentButton].searchField,
              trackList
            )}
          />
        )
      })}
    </>
  )
}

export default HeaderButtonsGroup
