import * as React from 'react'
import PlayerBar from '@/screens/components/PlayerBar/PlayerBar'
import Search from '@/screens/components/Search/Search'
import Menu from '@/screens/components/Menu/Menu'
import s from './Layout.module.scss'
import CollectionsNav from '@/screens/components/CollectionsNav/CollectionsNav'
import User from '../components/User/User'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={s.layoutTop}>
        <Menu />
        <section className={s.layoutTopMiddle}>
          <Search />
          {children}
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
