import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { userLogin } from '@/store/userSlice'
import { ApiRequestType, ApiResponseType } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'

const useSignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSuccessSignUp = () => {
    // dispatch(userLogin({ id, userName, email, token: '', login: true }))
    // navigate('/')
    console.log('SignUp success!')
  }

  return useMutation({
    mutationFn: (loginFieldsData: ApiRequestType) =>
      req<ApiResponseType>({
        method: 'post',
        endpoint: queries.User.SignUp,
        body: loginFieldsData,
      }),
    mutationKey: [QueryKey.UserLogin],
    onSuccess: handleSuccessSignUp,
  })
}

export default useSignUp
