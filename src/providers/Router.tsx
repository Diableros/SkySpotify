import * as React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import CollectionsScreen from '@/screens/Collections/CollectionsScreen'
import LoginScreen from '@/screens/Login/LoginScreen'
import { useAppSelector } from '@/store/hooks/reduxHooks'
import { RootStateType } from '@/store'
import NotFoundScreen from '@/screens/NotFound/NotFoundScreen'
import Layout from '@/screens/Layout/Layout'
import { Route } from './routes'

const Router = ({ children }: { children: React.ReactNode }) => {
  const userLogin = useAppSelector((state: RootStateType) => state.user.login)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: children,
        },
        {
          path: Route.Collections,
          element: <CollectionsScreen />,
        },
        {
          path: Route.Internal404,
          element: <NotFoundScreen />,
        },
      ],
      errorElement: userLogin ? (
        <Navigate to={Route.Internal404} />
      ) : (
        <NotFoundScreen />
      ),
    },
    { path: Route.Login, element: <LoginScreen /> },
  ])

  return <RouterProvider router={router} />
}

export default Router
