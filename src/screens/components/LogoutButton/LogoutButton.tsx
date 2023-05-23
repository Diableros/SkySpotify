import { useLocalStorage } from 'react-use'
import s from './LogoutButton.module.scss'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { userLogout } from '@/store/userSlice'
import LocalStorageField from '@/constants'

const LogoutButton = () => {
  const dispatch = useAppDispatch()
  const [, setToken] = useLocalStorage(LocalStorageField.Token)
  const [, setLocalUser] = useLocalStorage(LocalStorageField.LocalUser)

  const handleUserLogout = () => {
    dispatch(userLogout())
    setToken(null)
    setLocalUser(null)
  }

  return (
    <button type="button" className={s.logoutBtn} onClick={handleUserLogout}>
      Выйти
    </button>
  )
}

export default LogoutButton
