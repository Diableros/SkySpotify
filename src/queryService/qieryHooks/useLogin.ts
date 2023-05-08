import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { ApiRequestType, ApiResponseType } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'

const useLogin = () => {
  const handleSuccessLogin = (data: ApiResponseType) => {
    console.log('Success login! User data: ', data)
    // const dispatch = useAppDispatch()
    // useNavigate('/')
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
