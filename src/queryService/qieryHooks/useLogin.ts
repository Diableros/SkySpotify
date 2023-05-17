import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { userLogin } from '@/store/userSlice'
import {
  AuthRequestType,
  UserLoginSuccessType,
  UserRequestType,
} from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'
import useToken from './useToken'
import { ReqMethod } from '../request/types'
import LocalStorageField from '@/constants'

const useLogin = () => {
  const [, setLocalUser] = useLocalStorage(LocalStorageField.LocalUser)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { mutate: getToken } = useToken()

  const handleGetToken = ({ email, password }: UserRequestType) => {
    getToken({ email, password })
  }

  const handleSuccessLogin = ({
    id,
    username: userName,
    email,
  }: UserLoginSuccessType) => {
    dispatch(userLogin({ id, userName, email, token: '', login: true }))
    setLocalUser({ id, userName, email })
    navigate('/')
  }

  return useMutation({
    mutationFn: (loginFieldsData: AuthRequestType) =>
      req<UserLoginSuccessType>({
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
