/* ===ACTIONS=== */

import { headerAPI } from "../components/api/api";

const SET_USER_DATA = 'SET-USER-DATA';

/* ===/ACTIONS=== */

/* ===STATE=== */

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

/* ===/STATE=== */

/* ===ACTION CREATORS=== */

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    }
}

/* ===/ACTION CREATORS=== */

/* ===THUNKS=== */

export const authMe = () => {
    return (dispatch) => {
        headerAPI.checkAuth().then( data => {
            if(data.resultCode === 0) {
                let { id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

/* ===/THUNKS=== */

/* ===REDUCER LOGIC=== */

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}

/* ===/REDUCER LOGIC=== */

export default authReducer;