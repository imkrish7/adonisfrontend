import { combineReducers } from 'redux';
import { loginResponse, userInfoResponse, userLogoutResponse, userRegisterResponse } from './userReducer';

const rootReducers = combineReducers({
	loginResponse,
	userInfoResponse,
	userLogoutResponse,
	userRegisterResponse
})

export default rootReducers;