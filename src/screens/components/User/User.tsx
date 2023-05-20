import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useLocalStorage } from 'react-use'
import * as S from './User.style'
import Icon from '../Icon'
import IconSprite from '../Icon/enum'
import useUserStore from '@/store/hooks/useUserStore'
import LocalStorageField from '@/constants'
import { GetRefreshResponseType } from '@/queryService/apiTypes'
import queries from '@/queryService/queries'
import QueryKey from '@/queryService/queryKeys'
import req from '@/queryService/request'
import { ReqMethod } from '@/queryService/request/types'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { userSetAccessToken } from '@/store/userSlice'

const User = () => {
  const userName = useUserStore('userName')
  const dispatch = useAppDispatch()
  const [refresh] = useLocalStorage<string | undefined | null>(
    LocalStorageField.Token
  )

  const { refetch } = useQuery({
    queryFn: () =>
      req<GetRefreshResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.RefreshToken,
        body: { refresh },
      }),
    queryKey: [QueryKey.RefreshToken],
    onSuccess: ({ access: token }) => {
      dispatch(userSetAccessToken({ token }))
      // console.log(`Access token was refreshed.`)
    },
    onError: (response: HTTPError) => {
      if (refresh) throw new Error(response.message)
    },
    refetchInterval: 2 * 60 * 1000,
    enabled: !!refresh,
    retry: 1,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
  })

  const memoRefetch = React.useCallback(() => refetch, [refetch])

  React.useEffect(() => {
    if (refresh) memoRefetch()
  }, [memoRefetch, refresh])

  return (
    <S.UserBox>
      <S.UserName>{userName}</S.UserName>
      <Icon icon={IconSprite.Avatar} size="60px" roundCrop inactive />
    </S.UserBox>
  )
}

export default User
