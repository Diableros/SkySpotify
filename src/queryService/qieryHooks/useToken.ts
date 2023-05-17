import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { AuthRequestType, GetTokenResponseType } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'
import { ReqMethod } from '../request/types'

const useToken = () => {
  const [, setRefreshToken] = useLocalStorage('token')

  return useMutation({
    mutationFn: ({ email, password }: AuthRequestType) =>
      req<GetTokenResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.GetToken,
        body: { email, password },
      }),
    mutationKey: [QueryKey.UserToken],
    onSuccess: ({ refresh }) => {
      setRefreshToken(refresh)
    },
  })
}

export default useToken
