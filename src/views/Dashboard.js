import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userInfo, userLogout } from '../actions/userActions';
import {loadingState} from '../Utils/reduxUtils/defaultStates';


class Dashboard extends Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.userInfo({});
	}

	logout=()=>{
		localStorage.clear();
		window.location.href='/'
	}

	render(){
		return <div className="dashboard">
				<header className="header">
					<div className="logo">logo</div>
					<div onClick={this.logout} className="actions">Logout</div>
				</header>
				<main>
					{this.props.userInfoResponse.success && this.props.userInfoResponse.data && <div className="userinfo">
							<div className="email">
								{this.props.userInfoResponse.success && this.props.userInfoResponse.data.email}
							</div>
						</div>}
				</main>
			</div>;
	}
}

const mapStateToProps = state =>{
	return {
		userInfoResponse: state.userInfoResponse,
		userLogoutResponse: state.userLogoutResponse
	}
}

const mapDispachToProps = dispatch=>{
	return{ 
		userInfo: params=> dispatch(userInfo(params)),
		userLogout: params=> dispatch(userLogout(params))
	}
}



export default connect(mapStateToProps, mapDispachToProps)(Dashboard);