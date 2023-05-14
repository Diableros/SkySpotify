import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import * as S from './InvisibleComponent.style'
import { GetRefreshResponseType } from '@/queryService/apiTypes'
import req from '@/queryService/request'
import { ReqMethod } from '@/queryService/request/types'
import queries from '@/queryService/queries'
import QueryKey from '@/queryService/queryKeys'
import { userSetAccessToken } from '@/store/userSlice'
import { useAppDispatch } from '@/store/hooks/reduxHooks'

const InvisibleComponent = () => {
  const dispatch = useAppDispatch()
  const [refresh] = useLocalStorage<string>('token')

  useQuery({
    queryFn: () =>
      req<GetRefreshResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.RefreshToken,
        body: { refresh },
      }),
    queryKey: [QueryKey.RefreshToken],
    onSuccess: ({ access: token }) => {
      dispatch(userSetAccessToken({ token }))
      // console.log(`Access token was refreshed: ${token}`)
    },
    onError: (error) => console.log(error.message),
    refetchInterval: 2 * 60 * 1000,
    // staleTime: 2 * 60 * 1000,
  })

  return <S.InvisibleComponent />
}

export default InvisibleComponent
