import * as React from 'react';
import Router from './Router';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <Router>{children}</Router>;
};

export default Providers;
