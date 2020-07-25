import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';


// CHECK IF EMAIL EXIST ON DATABASE
export const recoveryEmail = (email) => {
    return dispatch => {
        dispatch(recoveryEmailStart());
        axios.get('/recoveryPassword/' + email)
            .then(response => {
                dispatch(recoveryEmailSuccess(response.data));
            })
            .catch(error => {
                dispatch(recoveryEmailFailed(error));
            });
    };
};

export const recoveryEmailStart = () => {
    return{
        type: actionTypes.RECOVERY_EMAIL_START
    }
}

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
        axios.get('/checkTokenValidity?token=' + token)
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
        dispatch(resetPasswordStart());
        axios.post('/insertnewpassword?token=' + tokenUrl + '&newpass=' + password)
        .then(response => {
            dispatch(resetPasswordSuccess(response.data));
        })
        .catch(error => {
            dispatch(resetPasswordFailed(error));
        })
    }
}

export const resetPasswordStart = () => {
    return{
        type: actionTypes.RESET_PASSWORD_START
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


// LOGIN
export const sendLogin = (email, password) => {
    return dispatch => {
        dispatch(sendLoginStart());
        axios.get('/login?user=' + email + '&passuser=' + password)
        .then(response => {
            dispatch(sendLoginSuccess(response.data));
        })
        .catch(error => {
            dispatch(sendLoginFailed(error));
        })
    }
}

export const sendLoginStart = () => {
    return{
        type: actionTypes.LOGIN_USER_START,
        loginUserResult: null
    }
}

export const sendLoginSuccess = (loginUserResult) => {
    return{
        type: actionTypes.LOGIN_USER_SUCCESS,
        loginUserResult: loginUserResult
    }
}

export const sendLoginFailed = (error) => {
    return{
        type: actionTypes.LOGIN_USER_FAILED,
        error: error
    }
}