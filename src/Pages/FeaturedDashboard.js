import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ExperimentCard from "../Components/ExperimentCard";

function FeaturedDashboard(props) {
	let navigate = useNavigate();

	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		if (showAlert) {
			setTimeout(() => {
				setShowAlert(false)
			}, 2000);
		}
	}, [showAlert])

	let userExperiments = [
		{title: "Faces", type: "Stimuli to Multiple Choice"},
		{title: "Memory Limits", type: "Stimuli to Numerical"},
		{title: "Peripheral Vision", type: "Stimuli to Alphabet"},
		{title: "Saccade Time", type: "Stimuli to Alphabet"}
	]

	return (
		<div className="container">
			{/*Header*/}
			<div className="row justify-content-between mt-4">
				<div className="col-auto">
					<div className="dropdown dropend">
						<h1 className="page-title fw-bold fs-3 text-dark dropdown-toggle" data-bs-toggle="dropdown"
						    role="button">
							Featured Experiments
						</h1>
						<ul className="dropdown-menu dropdown-menu-dark">
							<li>
								<Link className="dropdown-item" to="/">My Experiments</Link>
							</li>
						</ul>
					</div>
					<p className="text-muted">View all featured experiments</p>
				</div>
				{/*<div className="col-auto">*/}
				{/*	<i className="bi bi-person-circle text-muted opacity-75 fs-3 btn btn-sm btn-link" role="button"*/}
				{/*	   data-bs-toggle="dropdown"/>*/}
				{/*	<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">*/}
				{/*		<li>*/}
				{/*			<a className="dropdown-item" href="#">Settings</a>*/}
				{/*			<a className="dropdown-item" href="#">Sign Out</a>*/}
				{/*		</li>*/}
				{/*	</ul>*/}
				{/*</div>*/}
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text bg-transparent border-end-0"><i className="bi bi-search opacity-75"/></span>
				<input type="text" className="form-control fs-6 bg-transparent border-start-0" placeholder="Search"/>
			</div>

			{/* Cards */}
			<div className="experiment-cards mt-4">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					{
						userExperiments.map(experiment => (
							<ExperimentCard experiment={experiment} edit={false} alert={setShowAlert}/>
						))
					}
				</div>
			</div>

			{
				showAlert &&
				<div className="alert alert-success position-absolute bottom-0 start-50 translate-middle" role="alert">
					Successfully copied experiment link!
				</div>
			}
		</div>
	);
}

export default FeaturedDashboard;
