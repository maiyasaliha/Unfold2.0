// authReducer.js

const initialState = {
    userId: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_ID_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_USER_ID_SUCCESS':
            return {
                ...state,
                userId: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_USER_ID_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
