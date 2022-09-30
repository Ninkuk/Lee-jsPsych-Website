// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

// React Router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Global project CSS. Use App.css for page level css.
import './css/index.css';

// Pages
import App from './App';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import CreateExperiment from './Pages/CreateExperiment';
import CreateExperimentForm from "./Pages/CreateExperimentForm";
import ExperimentDashboard from "./Pages/ExperimentDashboard";
import MemoryLimits from "./AdminExperiments/MemoryLimits/MemoryLimits";
import _TemplateExperiment from "./AdminExperiments/_TemplateExperiment";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}/>
				<Route path="login" element={<Login/>}/>
				<Route path="dashboard" element={<Dashboard/>}/>

				{/* DYNAMIC USER EXPERIMENTS */}
				<Route path="experiment">
					<Route path="new" element={<CreateExperiment/>}/>
					<Route path="new/:experimentType" element={<CreateExperimentForm/>}/>
					<Route path=":experiment" element={<ExperimentDashboard/>}/>
				</Route>

				{/* STATIC ADMIN EXPERIMENTS */}
				<Route path="template-experiment" element={<_TemplateExperiment/>}/>
				<Route path="MemoryLimits" element={<MemoryLimits/>}/>


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
