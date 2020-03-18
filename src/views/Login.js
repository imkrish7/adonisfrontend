import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/userActions';

class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e)=>{
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = ()=>{
		const params = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.login(params);
	}

	isLogin=()=>{

		if(localStorage.getItem('Authorization')){
			return( 
				<Redirect to="/dashboard" />
			)
		}else{
		return <Redirect to="/login" />;
		}
	}
	render(){
		return <div className="login">
			{ this.isLogin() }
				<div className="form_wrapper">
					<div className="inputwrapper">
						<input onChange={this.handleChange} value={this.state.email} name="email" className="input" type="text" placeholder="Enter your email address" />
					</div>
					<div className="inputwrapper">
						<input onChange={this.handleChange} value={this.state.password} name="password" className="input" type="password" placeholder="Enter your password" />
					</div>
					<div className="submitbtn">
						<button onClick={this.handleSubmit} className="btn" type="submit">Login</button>
					</div>
				</div>
			</div>;
	}
}

const mapStateToProps = state => {
	return {
		loginResponse: state.loginResponse
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		login: params=> dispatch(login(params))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);