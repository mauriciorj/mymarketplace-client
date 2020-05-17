import * as actionTypes from '../actions/actionTypes';

const initialState = {
    validEmail: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RECOVERY_EMAIL_FAILED:
            return {
                ...state,
                validEmail: action.error
            };
        case actionTypes.RECOVERY_EMAIL_SUCCESS:
            return {
                ...state,
                validEmail: action.valid
            };
        default:
            return state
    }
}

export default reducer;