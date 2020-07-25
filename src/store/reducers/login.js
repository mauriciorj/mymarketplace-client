import * as actionTypes from '../actions/actionTypes';

const initialState = {
    validEmail: null,
    tokenUrlCheck: null,
    newPassword: null,
    error: null,
    loginUserResult: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECOVERY_EMAIL_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.RECOVERY_EMAIL_SUCCESS:
            return {
                ...state,
                validEmail: action.valid,
                loading: false
            };
        case actionTypes.RECOVERY_EMAIL_FAILED:
            return {
                ...state,
                validEmail: action.error,
                loading: false
            };
        case actionTypes.RECOVERY_TOKEN_SUCCESS:
            return {
                ...state,
                tokenUrlCheck: action.tokenUrlCheck
            };
        case actionTypes.RECOVERY_TOKEN_FAILED:
            return {
                ...state,
                tokenUrlCheck: action.tokenUrlCheck
            }
        case actionTypes.RESET_PASSWORD_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                newPassword: action.newPassword,
                loading: false
            }
        case actionTypes.RESET_PASSWORD_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.LOGIN_USER_START:
            return {
                ...state,
                loginUserResult: null
            }
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginUserResult: action.loginUserResult
            }
        case actionTypes.LOGIN_USER_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer;