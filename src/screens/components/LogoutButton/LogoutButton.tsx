import s from './LogoutButton.module.scss'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { userLogout } from '@/store/userSlice'

const LogoutButton = () => {
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      className={s.logoutBtn}
      onClick={() => dispatch(userLogout())}
    >
      Выйти
    </button>
  )
}

export default LogoutButton
