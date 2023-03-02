import * as React from 'react';
import Footer from 'screens/shared/playerBar/PlayerBar';
import Search from 'screens/shared/search/Search';
import Menu from 'screens/shared/menu/Menu';
import s from './Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className={s.layoutTop}>
				<Menu />
				<main className={s.layoutTopRight}>
					<Search />
					{children}
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
