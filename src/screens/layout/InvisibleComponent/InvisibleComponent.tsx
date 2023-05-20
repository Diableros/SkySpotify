import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { HTTPError } from 'ky'
import * as S from './InvisibleComponent.style'
import { GetRefreshResponseType } from '@/queryService/apiTypes'
import req from '@/queryService/request'
import { ReqMethod } from '@/queryService/request/types'
import queries from '@/queryService/queries'
import QueryKey from '@/queryService/queryKeys'
import { userSetAccessToken } from '@/store/userSlice'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import LocalStorageField from '@/constants'

const InvisibleComponent = () => {
  const dispatch = useAppDispatch()
  const [refresh] = useLocalStorage<string>(LocalStorageField.Token)

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
      // console.log(`Access token was refreshed: ${token}`)
    },
    onError: (response: HTTPError) => {
      if (refresh) throw new Error(response.message)
    },
    refetchInterval: 5 * 60 * 1000,
    enabled: !!refresh,
    retry: 0,
  })

  React.useEffect(() => {
    refetch()
  }, [refetch, refresh])

  return <S.InvisibleComponent />
}

export default InvisibleComponent
