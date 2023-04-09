import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CollectionsScreen from '@/screens/Collections/CollectionsScreen'
import Layout from '@/screens/Layout/Layout'
import LoginScreen from '@/screens/Login/LoginScreen'
import MainScreen from '@/screens/Main/TrackList'
import NotFoundScreen from '@/screens/NotFound/NotFoundScreen'
import { useAppSelector } from '@/hooks/reduxHooks'

const Router = ({ children }: { children: React.ReactNode }) => {
  const userLogin = useAppSelector((state) => state.user.login)

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
  ])

  return <RouterProvider router={router} />
}

export default Router
