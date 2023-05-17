import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { GetTokenResponseType, UserRequestType } from '../apiTypes'
import queries from '../queries'
import LocalStorageField from '@/constants'
import QueryKey from '../queryKeys'
import req from '../request'
import { ReqMethod } from '../request/types'

const useToken = () => {
  const [, setRefreshToken] = useLocalStorage(LocalStorageField.Token)

  return useMutation({
    mutationFn: ({ email, password }: UserRequestType) =>
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
