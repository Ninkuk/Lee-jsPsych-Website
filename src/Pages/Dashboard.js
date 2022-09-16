import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom";

function Dashboard(props) {
	let navigate = useNavigate();

	return (
		<div className="container">
			<h1 className="page-title">My Experiments</h1>
			<div className="row">
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							Memory Limits
							<button className="btn btn-success">Launch</button>
						</div>
					</div>
				</div>
			</div>
			<button className="btn btn-primary position-absolute bottom-0 end-0 mb-5 me-5"
			onClick={() => navigate('/create-experiment')}>+ Create Experiment</button>
		</div>
	);
}

export default Dashboard;