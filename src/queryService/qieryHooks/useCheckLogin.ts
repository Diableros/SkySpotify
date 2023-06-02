import * as React from 'react'
import { isExpired } from 'react-jwt'
import { useQuery } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '@/store/userSlice'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { ReqMethod } from '../request/types'
import req from '../request'
import queries from '../queries'
import QueryKey from '../queryKeys'
import LocalStorageField from '@/constants'
import { GetTokenResponseType, LocalUserType } from '../apiTypes'

const useCheckLogin = () => {
  const [userData] = useLocalStorage<LocalUserType>(LocalStorageField.LocalUser)
  const [localStorageToken] = useLocalStorage<string>(LocalStorageField.Token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const tokenIsExpired = isExpired(localStorageToken || '')

  React.useEffect(() => {
    if (tokenIsExpired) {
      navigate('/login')
    }
  }, [tokenIsExpired, navigate])

  const { fetchStatus } = useQuery({
    queryFn: () =>
      req<GetTokenResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.RefreshToken,
        body: { refresh: localStorageToken as string },
      }),
    onSuccess: () => {
      if (userData && localStorageToken) {
        const { id, email, userName } = userData
        dispatch(
          userLogin({
            id,
            email,
            token: localStorageToken,
            userName,
            login: true,
          })
        )
        navigate('/')
      }
    },
    onError: () => {},
    retry: 0,
    queryKey: [QueryKey.RefreshToken],
    refetchOnWindowFocus: false,
    retryDelay: 3000,
    enabled: !!userData && !tokenIsExpired,
  })

  const checkInProgress = !(fetchStatus === 'idle')

  return checkInProgress
}

export default useCheckLogin
