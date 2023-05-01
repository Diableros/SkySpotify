import { Navigate, Outlet } from 'react-router-dom'
import PlayerBar from '@/screens/components/PlayerBar/PlayerBar'
import Search from '@/screens/components/Search/Search'
import Menu from '@/screens/components/Menu/Menu'
import CollectionsNav from '@/screens/components/CollectionsNav/CollectionsNav'
import User from '../components/User/User'
import useUserStore from '@/hooks/useUserStore'
import useAppStore from '@/hooks/useAppStore'
import { TrackType } from '@/types'
import * as S from './Layout.style'

const Layout = () => {
  const isLogin = useUserStore('login')
  const currentTrack = useAppStore('currentTrack') as TrackType | undefined

  return (
    <>
      <S.LayoutTop>
        <Menu />
        <S.LayoutMiddle>
          <Search />
          {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </S.LayoutMiddle>
        <S.LayoutRight>
          <User />
          <CollectionsNav />
        </S.LayoutRight>
      </S.LayoutTop>
      {currentTrack ? <PlayerBar currentTrack={currentTrack} /> : null}
    </>
  )
}

export default Layout
