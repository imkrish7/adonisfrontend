import { getActionStates } from '../Utils/reduxUtils/actionStates';
import { successState, loadingState, errorState } from '../Utils/reduxUtils/defaultStates';
import { USER_LOGIN, USER_INFO, USER_LOGOUT, USER_REGISTER } from '../actions/userActions';

export const loginResponse = (state={}, action)=>{
	switch (action.type) {
		case getActionStates(USER_LOGIN).success:
			if (action.data.token) {
				localStorage.setItem('Authorization', action.data.token.token);
			}
			return { ...successState, data: action.data };
		case getActionStates(USER_LOGIN).inProgress:
			return { ...loadingState, loading: action.isLoading };
		case getActionStates(USER_LOGIN).failure:
			return { ...errorState, error: action.error };
		default:
			return state;
	}
}

export const userInfoResponse = (state={}, action)=>{
	switch(action.type){
		case getActionStates(USER_INFO).success:
			return {
				...successState, data: action.data
			}
		case getActionStates(USER_INFO).inProgress:
			return{ 
				...loadingState, loading: action.isLoading
			}
		case getActionStates(USER_INFO).failure:
			return{
				...errorState, error: action.error
			}
		default:
			return state;
	}
}

export const userLogoutResponse = (state={}, action)=>{
	switch(action.type){
		case getActionStates(USER_LOGOUT).success:
			return {
				...successState, data: action.data
			}
		case getActionStates(USER_LOGOUT).inProgress:
			return{ 
				...loadingState, loading: action.isLoading
			}
		case getActionStates(USER_LOGOUT).failure:
			return{
				...errorState, error: action.error
			}
		default:
			return state;
	}
}

export const userRegisterResponse = (state={}, action)=>{
	switch(action.type){
		case getActionStates(USER_REGISTER).success:
			return {
				...successState, data: action.data
			}
		case getActionStates(USER_REGISTER).inProgress:
			return{ 
				...loadingState, loading: action.isLoading
			}
		case getActionStates(USER_REGISTER).failure:
			return{
				...errorState, error: action.error
			}
		default:
			return state;
	}
}