import s from './MainHeader.module.scss'
import HeaderButtonsGroup from './HeaderButtonsGroup'

const MainHeader = () => {
  return (
    <div className={s.header}>
      <h1 className={s.title}>Треки123</h1>
      <div className={s.sortBox}>
        <p className={s.sortBoxtext}>Искать по:</p>
        <HeaderButtonsGroup />
      </div>
    </div>
  )
}

export default MainHeader
