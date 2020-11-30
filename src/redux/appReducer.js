import { authMe } from "./authReducer";

/* ===ACTIONS=== */

const SET_INITIALIZE = 'SET-INITIALIZE';

/* ===/ACTIONS=== */

/* ===STATE=== */

let initialState = {
    initialized: false,
}

/* ===/STATE=== */

/* ===ACTION CREATORS=== */

export const setInitialize = () => {
    return {
        type: SET_INITIALIZE,
    }
}

/* ===/ACTION CREATORS=== */

/* ===THUNKS=== */

export const initializeApp = () => {
    return (dispatch) => {
        let authPromise = dispatch(authMe());
        
        authPromise.then(() => {
            dispatch(setInitialize());
        });
    }
}

/* ===/THUNKS=== */

/* ===REDUCER LOGIC=== */

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZE: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

/* ===/REDUCER LOGIC=== */

export default appReducer;