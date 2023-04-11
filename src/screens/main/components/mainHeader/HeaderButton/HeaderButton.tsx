import * as React from 'react'
import { ButtonType } from './constants'
import * as S from './HeaderButton.style'

type PropsType = {
  variant: ButtonType
  isActive: boolean
  onClick: () => void
  resetButtons: () => void
  optionsList: string[] | null
}

const HeaderButton = ({
  variant,
  isActive,
  onClick,
  resetButtons,
  optionsList,
}: PropsType) => {
  return (
    <S.HeaderButtonBox>
      <S.HeaderButton type="button" onClick={onClick} isActive={isActive}>
        {variant}
      </S.HeaderButton>
      {isActive ? (
        <S.HeaderButtonSelect
          variant={variant}
          onMouseLeave={() => resetButtons()}
        >
          {optionsList &&
            optionsList.map((option) => <div key={option}>{option}</div>)}
        </S.HeaderButtonSelect>
      ) : null}
    </S.HeaderButtonBox>
  )
}

export default HeaderButton
