import * as React from 'react'
import { ButtonType } from './constants'
import * as S from './HeaderButton.style'

type PropsType = {
  variant: ButtonType
  isActive: boolean
  onClick: () => void
}

const mockData = [
  'Michael Jackson',
  'Frank Sinatra',
  'Calvin Harris',
  'Zhu',
  'Arctic Monkeys',
  'Michael Jackson',
  'Frank Sinatra',
  'Calvin Harris',
  'Zhu',
  'Arctic Monkeys',
]

const HeaderButton = ({ variant, isActive, onClick }: PropsType) => {
  return (
    <S.HeaderButtonBox>
      <S.HeaderButton type="button" onClick={onClick} isActive={isActive}>
        {variant}
      </S.HeaderButton>
      {isActive ? <S.HeaderButtonSelect variant={variant} /> : null}
    </S.HeaderButtonBox>
  )
}

export default HeaderButton
