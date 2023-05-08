import { useQuery } from '@tanstack/react-query'
import { ApiRequest, ApiResponse, UserLoginSuccessType } from '../apiTypes'
import errorCatcher from '../helpers/errorCatcher'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'

const useLogin = (credentials?: ApiRequest) => {
  console.log('use useLogin Hook')
  const handleLogin = (loginResponse: ApiResponse) => {
    console.log(loginResponse)
  }

  return useQuery({
    queryFn: () =>
      req<UserLoginSuccessType>({
        method: 'post',
        endpoint: queries.User.Login,
        body: credentials,
      }),
    queryKey: [QueryKey.UserLogin],
    onSuccess: handleLogin,
    onError: errorCatcher,
    enabled: !!credentials,
  })
}

export default useLogin
