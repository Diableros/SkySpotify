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
  const [token] = useLocalStorage<string>(LocalStorageField.Token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return useQuery({
    queryFn: () =>
      req<GetTokenResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.RefreshToken,
        body: { refresh: token as string },
      }),
    onSuccess: () => {
      const { id, email, userName } = userData
      dispatch(userLogin({ id, email, token, userName }))
      navigate('/')
    },
    retry: 0,
    queryKey: [QueryKey.RefreshToken],
  })
}

export default useCheckLogin
