//describe actions
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';

let initialState = { 
    users: [],
    pageSize: 7,
    totalUsersCount: 103,
    currentPage: 1,
 };

//action creator template for following function
export const followCreator = (userId) => {
  return {
      type: FOLLOW,
      userId: userId,
  }
}
//action creator template for unfollowing function
export const unFollowCreator = (userId) => {
  return {
      type: UNFOLLOW,
      userId: userId,
  }
}
//action creator template for generating users on page
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
//action creator template for getting users bya page number click
export const setCurrentPageCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
export const setUsersTotalCountCreator = (totalCount) => {
    debugger;
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount: totalCount,
    }
}
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
        //return unchanged original state if there is not a users action
        default:
            return state;
    }
}

export default usersReducer;