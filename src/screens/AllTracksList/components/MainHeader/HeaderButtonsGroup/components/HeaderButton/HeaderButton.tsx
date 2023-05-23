import * as React from 'react'
import useSearchStore from '@/store/hooks/useSearchStore'
import { OPTIONS_NOT_FOUND } from '../../constants'
import { Button } from '../../enum'
import * as S from './HeaderButton.style'
import { SearchByYear } from '../../type'

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
  const { [Button[buttonId]]: searchOptions } = useSearchStore()
  const [filterOptions, setFilterOptions] = React.useState<
    string[] | undefined
  >(searchOptions)

  const handleClickOption = (option: string) => {
    // console.log([Button[buttonId]])
    // console.log(`Clicked option is: ${option}`)
    setFilterOptions([option])
  }

  return (
    <S.HeaderButtonBox>
      <S.ButtonBadge number={filterOptions?.length} />
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
