import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

/* ===ACTIONS=== */

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

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    }
}

/* ===/ACTION CREATORS=== */

/* ===THUNKS=== */

export const authMe = () => {
    return (dispatch) => {
        return authAPI.checkAuth().then( data => {
            if(data.resultCode === 0) {
                let { id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then( data => {
            if(data.resultCode === 0) {
                dispatch(authMe());
            } else {
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {
                    _error: errorMessage,
                }));
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then( data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

/* ===/THUNKS=== */

/* ===REDUCER LOGIC=== */

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

/* ===/REDUCER LOGIC=== */

export default authReducer;