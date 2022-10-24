import React from 'react';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Home from './pages/home';
import Build from './pages/Build';
import Accessibility from './pages/Accessibility';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
			<Route index element={<Home />} />
            <Route path='*' element={<Build />} />
		</Route>
	)
);
