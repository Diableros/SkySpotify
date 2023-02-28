import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CollectionsScreen from 'screens/collections/CollectionsScreen';
import LoginScreen from 'screens/login/LoginScreen';
import MainScreen from 'screens/main/MainScreen';
import NotFoundScreen from 'screens/not-found/NotFoundScreen';

const Router = ({ children }: { children: React.ReactNode }) => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: children,
			children: [
				{
					path: '/',
					element: <LoginScreen />,
				},
				{
					path: 'main/',
					element: <MainScreen />,
				},
				{
					path: 'collections',
					element: <CollectionsScreen />,
				},
			],
			errorElement: <NotFoundScreen />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
