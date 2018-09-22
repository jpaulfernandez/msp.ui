import { USER_REQUESTED, 
    USER_SUBMITTED, 
    USER_REQUEST_SUCCESS, 
    USER_SUBMIT_SUCCESS, 
    USER_REQUEST_FAILED, 
    USER_SUBMIT_FAILED, 
    USER_REQUEST_PENDING, 
    USER_SUBMIT_PENDING,
    USER_MODEL_CHANGE } from '../constants/user';

import UserService from '../services/userService';

export const requestUser = (userId) => (dispatch) => {
    dispatch(request(true));
    UserService.requestUser(userId).then((resolve) =>{
        dispatch(requestSuccess(resolve));
    });
}

export const handleStateChange = (id, value) => (dispatch) => {
    dispatch(modelChange({[id]:value}));
}

export const saveUser = (user) => (dispatch) => {
    dispatch(submit(true));
    UserService.submitUser(user).then(resolve => {
        dispatch(submitSuccess(resolve));
    }, reject => {
        dispatch(submitFailed(reject));
    })
}


const request = (isPending) => ({type: USER_REQUESTED, isPending});
const requestSuccess = (payload) => ({type: USER_REQUEST_SUCCESS, payload});
const requestFailed = (isLoggedIn) => ({type: USER_REQUEST_FAILED, isLoggedIn});
const modelChange = (payload) => ({type: USER_MODEL_CHANGE, payload}) 
const submit = (isPending) => ({type: USER_SUBMITTED, isPending});
const submitSuccess = (isSuccess) => ({type: USER_SUBMIT_SUCCESS, isSuccess});
const submitFailed = (isFailed) => ({type: USER_SUBMIT_FAILED, isFailed});