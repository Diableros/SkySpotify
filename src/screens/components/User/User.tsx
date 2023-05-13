import { useQuery } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import * as S from './User.style'
import { useAppDispatch, useAppSelector } from '@/store/hooks/reduxHooks'
import Icon from '../Icon'
import IconSprite from '../Icon/enum'
import { GetRefreshResponseType } from '@/queryService/apiTypes'
import req from '@/queryService/request'
import { ReqMethod } from '@/queryService/request/types'
import queries from '@/queryService/queries'
import QueryKey from '@/queryService/queryKeys'
import { userSetAccessToken } from '@/store/userSlice'

const User = () => {
  const dispatch = useAppDispatch()
  const {
    user: { userName },
  } = useAppSelector((state) => state)

  const [refresh] = useLocalStorage<string>('token')

  useQuery({
    queryFn: () =>
      req<GetRefreshResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.RefreshToken,
        body: { refresh },
      }),
    queryKey: [QueryKey.RefreshToken],
    onSuccess: ({ access: token }) => dispatch(userSetAccessToken({ token })),
  })

  return (
    <S.UserBox>
      <S.UserName>{userName}</S.UserName>
      <Icon icon={IconSprite.Avatar} size="60px" roundCrop inactive />
    </S.UserBox>
  )
}

export default User
