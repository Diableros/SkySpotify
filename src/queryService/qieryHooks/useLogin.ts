import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { userLogin } from '@/store/userSlice'
import { AuthRequestType, AuthResponseType } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'
import useToken from './useToken'
import { ReqMethod } from '../request/types'

const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { mutate: getToken } = useToken()

  const handleGetToken = ({ email, password }: AuthResponseType) => {
    getToken({ email, password })
  }

  const handleSuccessLogin = ({
    id,
    username: userName,
    email,
  }: AuthResponseType) => {
    dispatch(userLogin({ id, userName, email, token: '', login: true }))
    navigate('/')
  }

  return useMutation({
    mutationFn: (loginFieldsData: AuthRequestType) =>
      req<AuthResponseType>({
        method: ReqMethod.Post,
        endpoint: queries.User.Login,
        body: loginFieldsData,
      }),
    mutationKey: [QueryKey.UserLogin],
    onSuccess: handleSuccessLogin,
    onMutate: handleGetToken,
  })
}

export default useLogin
