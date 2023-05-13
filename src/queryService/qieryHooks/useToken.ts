import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { AuthRequestType, GetTokenResponseType } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'

const useToken = () => {
  const [, setRefreshToken] = useLocalStorage('refreshToken')
  const [, setAccesshToken] = useLocalStorage('accessToken')

  return useMutation({
    mutationFn: ({ email, password }: AuthRequestType) =>
      req<GetTokenResponseType>({
        method: 'post',
        endpoint: queries.User.GetToken,
        body: { email, password },
      }),
    mutationKey: [QueryKey.UserToken],
    onSuccess: ({ refresh, access }) => {
      setRefreshToken(refresh)
      setAccesshToken(access)
    },
  })
}

export default useToken
