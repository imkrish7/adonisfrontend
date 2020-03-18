import React , { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';


class Default extends Component{

	render(){
		return <div className="default_page">
				<div className="action">
					<button className="btn">
						<Link to="/login">Login</Link>
					</button>
					<button className="btn">
						<Link to="/register">Register</Link>
					</button>
				</div>
			</div>;
	}
}

export default Default;