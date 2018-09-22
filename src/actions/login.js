import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/login';
import LoginService from '../services/loginService';

export const login = (userName, password) => (dispatch) => {
    dispatch(request({}));
    // LoginService.login(userName, password).then(resolve => {
    //     localStorage.setItem('token', '12345');
    //     dispatch(success(true));
    // }, reject => {
    //     dispatch(failed(false));
    // });
    localStorage.setItem('token', '12345');
    dispatch(success(true));
}

export const loggedout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout(false));
}

const request = (isLoggedIn) => ({type: LOGIN_REQUEST, isLoggedIn});
const success = (isLoggedIn) => ({type: LOGIN_SUCCESS, isLoggedIn});
const failed = (isLoggedIn) => ({type: LOGIN_FAILED, isLoggedIn});
const logout = (isLoggedIn) => ({type: LOGOUT, isLoggedIn});