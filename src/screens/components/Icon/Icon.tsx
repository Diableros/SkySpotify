import * as S from './Icon.style'
import sprite from '@/img/sprite.svg'
import GetIcon from './enum'

type PropsType = {
  icon: GetIcon
  size?: number
  width?: number
  height?: number
  color?: string
  active?: boolean
  onClick?: () => void
}

const Icon = ({
  icon,
  size,
  width,
  height,
  color,
  onClick,
  active = true,
}: PropsType) => {
  return (
    <S.IconWrapper
      size={size}
      width={width}
      height={height}
      color={color}
      onClick={onClick}
      active={active}
    >
      <svg>
        <use xlinkHref={`${sprite}#icon-${icon}`} />
      </svg>
    </S.IconWrapper>
  )
}

export default Icon
