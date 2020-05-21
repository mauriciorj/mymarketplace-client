import * as actionTypes from '../actions/actionTypes';

const initialState = {
    validEmail: null,
    tokenUrlCheck: null,
    newPassword: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RECOVERY_EMAIL_SUCCESS:
            return {
                ...state,
                validEmail: action.valid
            };
        case actionTypes.RECOVERY_EMAIL_FAILED:
            return {
                ...state,
                validEmail: action.error
            };
        case actionTypes.RECOVERY_TOKEN_SUCCESS:
            return{
                ...state,
                tokenUrlCheck: action.tokenUrlCheck
            };
        case actionTypes.RECOVERY_TOKEN_FAILED:
            return{
                ...state,
                tokenUrlCheck: action.tokenUrlCheck
            }
        case actionTypes.RESET_PASSWORD_SUCCESS:
            return{
                ...state,
                newPassword: action.newPassword
            }
        case actionTypes.RESET_PASSWORD_FAILED:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer;