import { Navigate, Outlet } from 'react-router-dom'
import PlayerBar from '@/screens/components/PlayerBar/PlayerBar'
import Search from '@/screens/components/Search/Search'
import Menu from '@/screens/components/Menu/Menu'
import s from './Layout.module.scss'
import CollectionsNav from '@/screens/components/CollectionsNav/CollectionsNav'
import User from '../components/User/User'
import useUserStore from '@/hooks/useUserStore'

const Layout = () => {
  const isLogin = useUserStore('login')

  return (
    <>
      <div className={s.layoutTop}>
        <Menu />
        <section className={s.layoutTopMiddle}>
          <Search />
          {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </section>
        <section className={s.layoutTopRight}>
          <User />
          <CollectionsNav />
        </section>
      </div>
      <PlayerBar />
    </>
  )
}

export default Layout
