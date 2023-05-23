import * as React from 'react'
import useSearchStore from '@/store/hooks/useSearchStore'
import { OPTIONS_NOT_FOUND } from '../../constants'
import { Button } from '../../enum'
import * as S from './HeaderButton.style'
import { SearchByYear } from '../../type'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'

type PropsType = {
  buttonId: Button
  name: string
  isActive: boolean
  onClick: () => void
  resetButtons: () => void
  optionsList: string[]
}

const HeaderButton = ({
  buttonId,
  name,
  isActive,
  onClick,
  resetButtons,
  optionsList = [OPTIONS_NOT_FOUND],
}: PropsType) => {
  const dispatch = useAppDispatch()
  const { [Button[buttonId]]: searchOptions } = useSearchStore()
  const [filterOptions, setFilterOptions] = React.useState<
    string[] | undefined
  >(searchOptions)

  const handleClickOption = (option: string) => {
    // console.log([Button[buttonId]])
    // console.log(`Clicked option is: ${option}`)
    setFilterOptions([option])
  }

  const handleSearchCancel = () => {
    console.log(`Cancelling search ${buttonId}`)
    setFilterOptions([])
  }

  React.useEffect(() => {
    switch (buttonId) {
      case Button.Author:
        console.log(`Push ${filterOptions || 'nothing'} to byAuthor`)
        break
      case Button.Genre:
        console.log(`Push ${filterOptions || 'nothing'} to byGenre`)
        break
      case Button.Year:
        console.log(`Push ${filterOptions || 'nothing'} to byYear`)
        break

      default:
        throw new Error('Unknown dispatch action')
    }
  }, [buttonId, dispatch, filterOptions])

  return (
    <S.HeaderButtonBox>
      <S.ButtonBadge
        number={filterOptions?.length}
        onClick={handleSearchCancel}
      />
      {filterOptions?.length ? (
        <S.ButtonSearchCancel>
          <Icon icon={IconSprite.Cross} size="16px" />
        </S.ButtonSearchCancel>
      ) : null}
      <S.HeaderButton type="button" onClick={onClick} isActive={isActive}>
        {name}
      </S.HeaderButton>
      {isActive ? (
        <S.HeaderButtonSelect onMouseLeave={() => resetButtons()}>
          <S.HeaderButtonSelectItemsBox>
            {optionsList.map((option) => (
              <S.HeaderButtonSelectItem
                key={option}
                onClick={() => handleClickOption(option)}
              >
                {option}
              </S.HeaderButtonSelectItem>
            ))}
          </S.HeaderButtonSelectItemsBox>
        </S.HeaderButtonSelect>
      ) : null}
    </S.HeaderButtonBox>
  )
}

export default HeaderButton
