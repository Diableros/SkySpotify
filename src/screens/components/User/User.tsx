import * as S from './User.style'
import { useAppSelector } from '@/hooks/reduxHooks'
import Icon from '../Icon'
import IconSprite from '../Icon/enum'

const User = () => {
  const {
    user: { userName },
  } = useAppSelector((state) => state)

  return (
    <S.UserBox>
      <S.UserName>{userName}</S.UserName>
      <Icon icon={IconSprite.Avatar} size="60px" roundCrop inActive />
    </S.UserBox>
  )
}

export default User
