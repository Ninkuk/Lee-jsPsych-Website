import React from 'react';
import {useNavigate} from "react-router-dom";
import SearchHeader from "../Components/SearchHeader";
import ExperimentCard from "../Components/ExperimentCard";

function Dashboard(props) {
	let navigate = useNavigate();

	let userExperiments = [
		{title: "Faces", type: "Stimuli to Multiple Choice"},
		{title: "Memory Limits", type: "Stimuli to Numerical"},
		{title: "Peripheral Vision", type: "Stimuli to Alphabet"},
		{title: "Saccade Time", type: "Stimuli to Alphabet"}
	]

	return (
		<div className="container">
			<SearchHeader title="My Experiments" subtitle="View, modify and run all your experiments" contentList={""}/>
			{/*FILTER*/}
			{/*<div>*/}
			{/*	<h3 className="fs-6 fw-semibold">Experiment Type</h3>*/}
			{/*	<div className="row">*/}
			{/*		<div className="col"></div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			<div className="experiment-cards mt-4">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					{
						userExperiments.map(experiment => (
							<ExperimentCard title={experiment.title} type={experiment.type}/>
						))
					}
				</div>
			</div>
			<button className="btn btn-primary position-absolute bottom-0 end-0 mb-5 me-5 rounded-pill"
			        onClick={() => navigate('/experiment/new')}>
				<i className="bi bi-plus-circle-dotted"></i> Create Experiment
			</button>
		</div>
	);
}

export default Dashboard;
