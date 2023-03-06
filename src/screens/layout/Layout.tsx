import * as React from 'react';
import Footer from '@/screens/shared/playerBar/PlayerBar';
import Search from '@/screens/shared/search/Search';
import Menu from '@/screens/shared/menu/Menu';
import s from './Layout.module.scss';
import CollectionsNav from '@/screens/shared/collectionsNav/CollectionsNav';
import MainList from '@/screens/main/components/mainList/MainHeader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={s.layoutTop}>
        <Menu />
        <section className={s.layoutTopRight}>
          <Search />
          <MainList />
          {children}
        </section>
        <CollectionsNav />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
