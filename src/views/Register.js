import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRegister } from '../actions/userActions';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			repeatPassword: '',
		};
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = () => {
		const params = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.userRegister(params);
	};

	componentWillReceiveProps(nextProps, nextContext){
		console.log(nextProps);
	}

	isValid = ()=>{
		return this.state.password.length > 6 && this.state.password== this.state.repeatPassword;
	}

	render() {
		return (
			<div className="register">
				{ this.props.userRegisterResponse.data && this.props.userRegisterResponse.data.success ? 
				<div className="success">
					<div className="message">Registration Successfull</div>
					<div><button className="btn"><Link to="/login">Login</Link></button></div>
				</div>
				:<div className="form_wrapper">
					<div className="inputwrapper">
						<input
							onChange={this.handleChange}
							value={this.state.email}
							name="email"
							className="input"
							type="text"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="inputwrapper">
						<input
							onChange={this.handleChange}
							value={this.state.password}
							name="password"
							className="input"
							type="password"
							placeholder="Enter your password"
						/>
					</div>
					<div className="inputwrapper">
						<input
							onChange={this.handleChange}
							value={this.state.repeatPassword}
							name="repeatPassword"
							className="input"
							type="password"
							placeholder="Repeat password"
						/>
					</div>
					<div className="submitbtn">
						<button disabled={!this.isValid()} onClick={this.handleSubmit} className="btn" type="submit">
							Register
						</button>
					</div>
				</div>
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return{
		userRegisterResponse: state.userRegisterResponse
	}
}

const mapDispatchToProps = dispatch => {
	return{
		userRegister: params => dispatch(userRegister(params))
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Register);
