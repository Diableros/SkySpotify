import * as React from 'react'
import { OPTIONS_NOT_FOUND } from '../../constants'
import * as S from './HeaderButton.style'

type PropsType = {
  name: string
  isActive: boolean
  onClick: () => void
  resetButtons: () => void
  optionsList: string[]
}

const HeaderButton = ({
  name,
  isActive,
  onClick,
  resetButtons,
  optionsList = [OPTIONS_NOT_FOUND],
}: PropsType) => {
  return (
    <S.HeaderButtonBox>
      <S.ButtonBadge number={5} />
      <S.HeaderButton type="button" onClick={onClick} isActive={isActive}>
        {name}
      </S.HeaderButton>
      {isActive ? (
        <S.HeaderButtonSelect onMouseLeave={() => resetButtons()}>
          <S.HeaderButtonSelectItemsBox>
            {optionsList.map((option) => (
              <S.HeaderButtonSelectItem key={option}>
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
