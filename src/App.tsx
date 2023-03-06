import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';
import { RootStateType } from './store';

const App = () => {
  const userLogin = useAppSelector((state: RootStateType) => state.user.login);

  return userLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
