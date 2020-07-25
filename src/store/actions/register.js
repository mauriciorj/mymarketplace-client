import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

export const registerUser = (formValues) => {
    return dispatch => {
        dispatch(registerUserStart());
        axios.post('/user/add', formValues)
        .then(response => {
            dispatch(registerUserSuccess(response.data));            
        })
        .catch(error => {
            dispatch(registerUserFailed(error));
        })
    };
};

export const registerUserStart = () =>{
    return{
        type: actionTypes.REGISTER_USER_START
    }
}

export const registerUserSuccess = (registerResult) => {
    return{
        type: actionTypes.REGISTER_USER_SUCCESS,
        registerResult: registerResult
    }
}

export const registerUserFailed = (error) => {
    return{
        type: actionTypes.REGISTER_USER_FAILED,
        error: error
    }
}