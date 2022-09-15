// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// React Router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Global project CSS. Use App.css for page level css.
import './css/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}/>
				<Route path="/dashboard" element={<Dashboard/>}/>
				<Route path="/login" element={<Login/>}/>

				{/* Display 404 page when no route match */}
				<Route path="*" element={<p>Error 404: Page not found</p>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
