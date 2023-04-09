import sprite from '@/img/sprite.svg'
import s from './User.module.scss'
import { useAppSelector } from '@/hooks/reduxHooks'

const User = () => {
  const { userName } = useAppSelector((state) => state.user)

  return (
    <div className={s.user}>
      <p className={s.userName}>{userName}</p>
      <div className={s.userAvaBox}>
        <svg className={s.userSvg}>
          <use xlinkHref={`${sprite}#icon-avatar`} />
        </svg>
      </div>
    </div>
  )
}

export default User
