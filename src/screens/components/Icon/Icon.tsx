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
  inActive?: boolean
  onClick?: () => void
}

const Icon = ({
  icon,
  size,
  width,
  height,
  roundCrop = false,
  color,
  onClick,
  inActive = false,
}: PropsType) => {
  return (
    <S.IconWrapper
      size={size}
      width={width}
      height={height}
      roundCrop={roundCrop}
      color={color}
      onClick={onClick}
      inActive={inActive}
    >
      <svg>
        <use xlinkHref={`${sprite}#icon-${icon}`} />
      </svg>
    </S.IconWrapper>
  )
}

export default Icon
