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
      <S.HeaderButton type="button" onClick={onClick} isActive={isActive}>
        {name}
      </S.HeaderButton>
      {isActive ? (
        <S.HeaderButtonSelect onMouseLeave={() => resetButtons()}>
          {optionsList.map((option) => (
            <div key={option}>{option}</div>
          ))}
        </S.HeaderButtonSelect>
      ) : null}
    </S.HeaderButtonBox>
  )
}

export default HeaderButton
