import s from 'App.module.scss';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className={s.wrapper}>
			<Outlet />
		</div>
	);
}

export default App;
