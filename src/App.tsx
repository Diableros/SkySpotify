import s from 'App.module.scss';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/reduxHooks';

function App() {
	const userLogin = useAppSelector((state) => state.user.login);

	return userLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default App;
