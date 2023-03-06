import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CollectionsScreen from '@/screens/collections/CollectionsScreen';
import Layout from '@/screens/layout/Layout';
import LoginScreen from '@/screens/login/LoginScreen';
import MainScreen from '@/screens/main/MainList';
import NotFoundScreen from '@/screens/not-found/NotFoundScreen';
import { useAppSelector } from '@/hooks/reduxHooks';

const Router = ({ children }: { children: React.ReactNode }) => {
  const userLogin = useAppSelector((state) => state.user.login);

  // костыль на костыле, буду переделывать
  const router = createBrowserRouter([
    {
      path: '/',
      element: children,
      children: [
        {
          path: '/',
          element: (
            <Layout>
              <MainScreen />
            </Layout>
          ),
        },
        {
          path: 'collections',
          element: (
            <Layout>
              <CollectionsScreen />
            </Layout>
          ),
        },
      ],
      errorElement: userLogin ? (
        <Layout>
          <NotFoundScreen />
        </Layout>
      ) : (
        <NotFoundScreen />
      ),
    },
    { path: '/login', element: <LoginScreen /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
