import * as React from 'react';
import RouterProvider from './Router';
import QueryProvider from './Query';
import ReduxProvider from './Redux';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReduxProvider>
			<RouterProvider>
				<QueryProvider>{children}</QueryProvider>
			</RouterProvider>
		</ReduxProvider>
	);
};

export default Providers;
