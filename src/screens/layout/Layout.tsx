import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PlayerBar from '@/screens/components/PlayerBar/PlayerBar'
import Search from '@/screens/components/Search/Search'
import Menu from '@/screens/components/Menu/Menu'
import CollectionsNav from '@/screens/components/CollectionsNav/CollectionsNav'
import User from '../components/User/User'
import useUserStore from '@/store/hooks/useUserStore'
import * as S from './Layout.style'
import useCurrentTrack from '@/hooks/useCurrentTrack'

const Layout = () => {
  const isLogin = useUserStore('login')
  const { currentTrack } = useCurrentTrack()

  console.log(`Layout current track is: `, currentTrack?.id)
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
      {currentTrack ? <PlayerBar /> : null}
    </>
  )
}

export default Layout
