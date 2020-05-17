import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

export const recoveryEmailInit = (email) => {
    return dispatch => {
        axios.get('/user/' + email)
            .then(response => {
                dispatch(recoveryEmailSuccess(response.data));
                //console.log(response.data);
            })
            .catch(error => {
                dispatch(recoveryEmailFailed(error));
                //console.log(error);
            });
    };
};

export const recoveryEmailFailed = (error) =>{
    return{
        type: actionTypes.RECOVERY_EMAIL_FAILED,
        error: error,
    };
};

export const recoveryEmailSuccess = (valid) =>{
    return{
        type: actionTypes.RECOVERY_EMAIL_SUCCESS,
        valid: valid
    };
};