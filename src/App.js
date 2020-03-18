import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Default from './views/Default';

const isAuthenticated = ()=>{
	return localStorage.getItem('Authorization') ? true : false;
}


const PrivateRoute = ({ component: Component, ...rest})=>{
	return(
		<Route {...rest} render={props=> isAuthenticated() ? (<Component {...props} />):( <Redirect to={{ pathname: '/', state: { from: props.location}}} /> )} />
	)
}

function App() {
	return <Router>
			<Switch>
				<Route path="/" exact component={Default} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>;
}

export default App;
