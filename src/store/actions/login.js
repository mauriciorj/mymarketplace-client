import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';


// CHECK IF EMAIL EXIST ON DATABASE
export const recoveryEmailInit = (email) => {
    return dispatch => {
        axios.get('/recoveryPassword/' + email)
            .then(response => {
                dispatch(recoveryEmailSuccess(response.data));
            })
            .catch(error => {
                dispatch(recoveryEmailFailed(error));
            });
    };
};

export const recoveryEmailSuccess = (valid) => {
    return{
        type: actionTypes.RECOVERY_EMAIL_SUCCESS,
        valid: valid
    };
};

export const recoveryEmailFailed = (error) =>{
    return{
        type: actionTypes.RECOVERY_EMAIL_FAILED,
        valid: error,
    };
};


// CHECK IF RECOVERY PASSWORD TOKEN IS VALID OR EXPIRED
export const recoveryTokenCheck = (token) => {
    return dispatch => {
        axios.get('/insertnewpassword?token=' + token)
        .then(response => {
            dispatch(recoveryTokenCheckSuccess(response.data));
        })
        .catch(error => {
            dispatch(recoveryTokenCheckFailed(error));
        })
    };
};

export const recoveryTokenCheckSuccess = (tokenUrlCheck) => {
    return{
        type: actionTypes.RECOVERY_TOKEN_SUCCESS,
        tokenUrlCheck: tokenUrlCheck
    };
};

export const recoveryTokenCheckFailed = (error) => {
    return{
        type: actionTypes.RECOVERY_TOKEN_FAILED,
        error: error
    };
};


//RESET PASSWORD
export const resetPassword = (tokenUrl, password) => {
    return dispatch => {
        axios.post('/insertnewpassword?token=' + tokenUrl + '?newpass=' + password)
        .then(response => {
            dispatch(resetPasswordSuccess(response.data));
        })
        .catch(error => {
            dispatch(resetPasswordFailed(error));
        })
    }
}

export const resetPasswordSuccess = (newPassword) => {
    return{
        type: actionTypes.RESET_PASSWORD_SUCCESS,
        newPassword: newPassword
    };
};

export const resetPasswordFailed = (error) => {
    return{
        type: actionTypes.RESET_PASSWORD_FAILED,
        error: error
    };
};