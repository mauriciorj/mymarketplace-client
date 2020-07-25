import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    registerResult: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                registerResult: action.registerResult,
                loading: false
            }
        case applicationCache.REGISTER_USER_FAILED:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

export default reducer;