//discribe action
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

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

export default authReducer;