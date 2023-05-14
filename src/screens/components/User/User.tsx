import * as S from './User.style'
import { useAppSelector } from '@/store/hooks/reduxHooks'
import Icon from '../Icon'
import IconSprite from '../Icon/enum'

const User = () => {
  const {
    user: { userName },
  } = useAppSelector((state) => state)

  return (
    <S.UserBox>
      <S.UserName>{userName}</S.UserName>
      <Icon icon={IconSprite.Avatar} size="60px" roundCrop inactive />
    </S.UserBox>
  )
}

export default User
