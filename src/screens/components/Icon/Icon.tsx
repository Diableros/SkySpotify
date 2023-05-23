import * as S from './Icon.style'
import sprite from '@/img/sprite.svg'
import IconSprite from './enum'

type PropsType = {
  icon: IconSprite
  size?: string
  width?: string
  height?: string
  roundCrop?: boolean
  color?: string
  inactive?: boolean
  onClick?: () => void
  isActive?: boolean
}

const Icon = ({
  icon,
  size,
  width,
  height,
  roundCrop = false,
  color,
  onClick,
  inactive = false,
  isActive = false,
}: PropsType) => {
  return (
    <S.IconWrapper
      size={size}
      width={width}
      height={height}
      roundCrop={roundCrop}
      color={color}
      onClick={onClick}
      inactive={inactive}
      isActive={isActive}
    >
      <svg>
        <use xlinkHref={`${sprite}#icon-${icon}`} />
      </svg>
    </S.IconWrapper>
  )
}

export default Icon
