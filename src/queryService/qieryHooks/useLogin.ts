import { useQuery } from '@tanstack/react-query'
import { ApiRequestType, ApiResponseType } from '../apiTypes'
import errorCatcher from '../helpers/errorCatcher'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'

const useLogin = (credentials?: ApiRequestType) => {
  const handleLogin = (loginResponse: ApiResponseType) => {
    console.log('server response: ', loginResponse)
  }

  return useQuery({
    queryFn: () =>
      req<ApiResponseType>({
        method: 'post',
        endpoint: queries.User.Login,
        body: credentials,
      }),
    queryKey: [QueryKey.UserLogin],
    onSuccess: handleLogin,
    onError: errorCatcher,
    retry: 1,
    enabled: !!credentials,
  })
}

export default useLogin
