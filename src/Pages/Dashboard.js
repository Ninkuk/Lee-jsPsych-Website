import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

function Dashboard(props) {
	return (
		<div className="container">
			<h1 className="page-title">My Experiments</h1>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Search"/>
			</div>
			<div className="row">
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							Memory Limits
							&nbsp;
							<Link to="/invoices/6">Invoices</Link>
							<button className="btn btn-success">Launch</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;