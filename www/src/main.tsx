import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './routes/router'
import {RouterProvider} from "react-router-dom";

import './styles/app.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
