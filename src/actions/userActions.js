import { getActionStates } from '../Utils/reduxUtils/actionStates';
import { successState, loadingState, errorState} from '../Utils/reduxUtils/defaultStates'
import axios from 'axios';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_INFO = 'USER_INFO';
export const USER_LOGOUT = 'LOGOUT';
export const USER_REGISTER = 'REGISTER';

const defaultUrl = 'http://localhost:3333';


const APIRequest = (dispatch, params, method,url, successAction, loadingAction, errorAction)=>{

	let headers = { 
		'Content-Type': 'application/json'
	}

	if(method == 'GET'){
		headers['Authorization'] = "Bearer " + localStorage.getItem('Authorization');
	}
	const reqObj = {
		method: method,
		url: url,
		headers, 
		data: params
	}

	if(loadingAction){
		dispatch(loadingAction(true))
	}

	axios(reqObj).then(result=>{
		if (loadingAction) {
			dispatch(loadingAction(false));
		}

		if(successAction){
			dispatch(successAction(result.data))
		}
	}).catch(error=>{
		if (errorAction) {
			dispatch(errorAction(error.response.data));
		}
	})


}


export const loginSuccess = (data)=>{

	return { type: getActionStates(USER_LOGIN).success, data };
}

export const loginLoading= (isLoading)=>{
	return { type: getActionStates(USER_LOGIN).inProgress, isLoading };
}

export const loginErrored = (error)=>{
	return { type: getActionStates(USER_LOGIN).failure, error };
}

export const login = (params)=>{
	let url = defaultUrl + "/" + 'login';
	const method = "POST";
	return dispatch => APIRequest(dispatch, params, method,url, loginSuccess, loginLoading, loginErrored)
}

export const userInfoSuccess = (data)=>{

	return { type: getActionStates(USER_INFO).success, data };
}

export const userInfoLoading= (isLoading)=>{
	return { type: getActionStates(USER_INFO).inProgress, isLoading };
}

export const userInfoErrored = (error)=>{
	return { type: getActionStates(USER_INFO).failure, error };
}

export const userInfo = (params)=>{
	let url = defaultUrl + "/" + 'userInfo';
	const method = "GET";
	return dispatch => APIRequest(dispatch, params, method,url, userInfoSuccess, userInfoLoading, userInfoErrored)
}

export const userLogoutSuccess = (data)=>{

	return { type: getActionStates(USER_LOGOUT).success, data };
}

export const userLogoutLoading= (isLoading)=>{
	return { type: getActionStates(USER_LOGOUT).inProgress, isLoading };
}

export const userLogoutErrored = (error)=>{
	return { type: getActionStates(USER_LOGOUT).failure, error };
}

export const userLogout = (params)=>{
	let url = defaultUrl + "/" + 'userlogout';
	const method = "GET";
	return dispatch => APIRequest(dispatch, params, method,url, userLogoutSuccess, userLogoutLoading, userLogoutErrored)
}

export const userRegisterSuccess = (data)=>{

	return { type: getActionStates(USER_REGISTER).success, data };
}

export const userRegisterLoading= (isLoading)=>{
	return { type: getActionStates(USER_REGISTER).inProgress, isLoading };
}

export const userRegisterErrored = (error)=>{
	return { type: getActionStates(USER_REGISTER).failure, error };
}

export const userRegister = (params)=>{
	let url = defaultUrl + "/" + 'register';
	const method = "POST";
	return dispatch => APIRequest(dispatch, params, method,url, userRegisterSuccess, userRegisterLoading, userRegisterErrored)
}

