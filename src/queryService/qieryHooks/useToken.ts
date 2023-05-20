import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { GetTokenResponseType, UserRequestType } from '../apiTypes'
import queries from '../queries'
import LocalStorageField from '@/constants'
import QueryKey from '../queryKeys'
import req from '../request'
import { ReqMethod } from '../request/types'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { userSetAccessToken } from '@/store/userSlice'

const useToken = () => {
  const [, setRefreshToken] = useLocalStorage(LocalStorageField.Token)
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: ({ email, password }: UserRequestType) =>
      req<GetTokenResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.GetToken,
        body: { email, password },
      }),
    mutationKey: [QueryKey.UserToken],
    onSuccess: ({ refresh, access: token }) => {
      setRefreshToken(refresh)
      dispatch(userSetAccessToken({ token }))
    },
  })
}

export default useToken
