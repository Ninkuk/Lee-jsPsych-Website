import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function ExperimentCard(props) {
	let navigate = useNavigate();

	return (
		<div className="col">
			<div className="card h-100">
				<div className="card-header text-muted">{props.experiment.type}</div>
				<div className="card-body">
					<h5 className="card-title">{props.experiment.title}</h5>
					<p className="card-text fs-6 text-secondary">
						Brief description of the experiment here.
					</p>
					<div className="row align-items-end">
						<div className="col">
							<div className="btn-group" role="group" aria-label="Basic example">
								{
									props.edit
									&&
									<button type="button" className="btn btn-outline-warning btn-sm"
									        onClick={() => navigate('/experiment/qwert123')}>
										<i className="bi bi-pencil-square"></i> Edit
									</button>
								}
								<button type="button" className="btn btn-outline-success btn-sm"
								        onClick={() => window.open(props.experiment.title.replace(" ", ""), "_blank")}>
									<i className="bi bi-play-fill"></i> Run
								</button>
							</div>
						</div>
						<div className="col-auto">
							<i className="bi bi-share" role="button" onClick={() => {
								props.alert(true)
							}}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperimentCard;
