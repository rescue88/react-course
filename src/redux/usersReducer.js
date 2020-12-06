import { usersAPI } from "../api/api";

/* ===ACTIONS=== */

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET-USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'usersReducer/SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE-FOLLOWING-PROGRESS';

/* ===/ACTIONS=== */

/* ===STATE=== */

let initialState = { 
    users: [],
    pageSize: 7,
    totalUsersCount: 103,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
 };

 /* ===/STATE=== */

/* ===ACTIONS CREATORS=== */

//action creator template for following function
export const onFollow = (userId) => {
  return {
      type: FOLLOW,
      userId: userId,
  }
}
//action creator template for unfollowing function
export const onUnfollow = (userId) => {
  return {
      type: UNFOLLOW,
      userId: userId,
  }
}
//action creator template for generating users on page
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
//action creator template for getting users bya page number click
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
//get amount of users and set it as a state's variable
export const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount: totalCount,
    }
}
//open preloader gif while content is loading
export const togglePreloader = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}
//block button while waiting for response from a server
export const toggleFollowing = (followingProgress, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        followingProgress,
        userId,
    }
}

/* ===/ACTIONS CREATORS=== */

/* ===THUNKS=== */

//thunk: get users and send them into Users component
export const getUsers = (currentPage, pageSize,) => {
    return (dispatch) => {
        //draw preloader
        dispatch(togglePreloader(true));
        //change current page after click
        dispatch(setCurrentPage(currentPage));
        //load page with a fixed amount of users
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            //get rid of preloader
            dispatch(togglePreloader(false));
            //get users from a server
            dispatch(setUsers(data.items));
        });
    }
};
//thunk: block button while unfollowing
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.unfollowReq(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(onUnfollow(userId));
            }
            dispatch(toggleFollowing(false, userId));
        });
    }
};
//thunk: block button while following
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.followReq(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(onFollow(userId));
            }
            dispatch(toggleFollowing(false, userId));
        });
    }
}

/* ===/THUNKS=== */

/* ===REDUCER LOGIC=== */

//return changed state after a right action
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        //follow button click
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map( item => {
                    if(item.id === action.userId) {
                        return {...item, followed: true,};
                    }
                    return item;
                }),
            };
        //unfollow button click
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map( item => {
                    if(item.id === action.userId) {
                        return {...item, followed: false,};
                    }
                    return item;
                })
            };
        //initial users adding, get more users by a click
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users ],
            };
        //change page list of users by a click
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        //get amoung of users
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        //draw preloader
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        //block button
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress
                                                    ? [...state.followingProgress, action.userId]
                                                    : state.followingProgress.filter( id => id !== action.userId ),
            }
        //return unchanged original state if there is not a users action
        default:
            return state;
    }
}

/* ===/REDUCER LOGIC=== */

export default usersReducer;