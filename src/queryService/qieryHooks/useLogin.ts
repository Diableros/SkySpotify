import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { userLogin } from '@/store/userSlice'
import { ApiRequestType, ApiResponseType } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'

const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSuccessLogin = ({
    id,
    username: userName,
    email,
  }: ApiResponseType) => {
    dispatch(userLogin({ id, userName, email, token: '', login: true }))
    navigate('/')
  }

  return useMutation({
    mutationFn: (loginFieldsData: ApiRequestType) =>
      req<ApiResponseType>({
        method: 'post',
        endpoint: queries.User.Login,
        body: loginFieldsData,
      }),
    mutationKey: [QueryKey.UserLogin],
    onSuccess: handleSuccessLogin,
  })
}

export default useLogin
