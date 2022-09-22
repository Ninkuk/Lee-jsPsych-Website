import React from 'react';
import {useNavigate} from "react-router-dom";

function ExperimentCard(props) {
	let navigate = useNavigate();
	return (
		<div className="col">
			<div className="card h-100">
				<div className="card-header text-muted">{props.type}</div>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text fs-6 text-secondary">
						Brief description of the experiment here.
					</p>
					<div className="btn-group" role="group" aria-label="Basic example">
						<button type="button" className="btn btn-outline-warning btn-sm"
						        onClick={() => navigate('/experiment/qwert123')}>
							<i className="bi bi-pencil-square"></i> Edit
						</button>
						<button type="button" className="btn btn-outline-success btn-sm">
							<i className="bi bi-play-fill"></i> Run
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperimentCard;
