import * as React from 'react';
import Footer from '@/screens/shared/playerBar/PlayerBar';
import Search from '@/screens/shared/search/Search';
import Menu from '@/screens/shared/menu/Menu';
import s from './Layout.module.scss';
import CollectionsNav from '@/screens/shared/collectionsNav/CollectionsNav';
import MainList from '@/screens/main/components/mainHeader/MainHeader';
import User from '../shared/user/User';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={s.layoutTop}>
        <Menu />
        <section className={s.layoutTopMiddle}>
          <Search />
          <MainList />
          {children}
        </section>
        <section className={s.layoutTopRight}>
          <User />
          <CollectionsNav />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
