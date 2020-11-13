//describe actions
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {id: 1, isFollowed: true, fullName: 'Bohdan Z.', status: 'I am a boss', location: {city: 'Romny', country: 'Ukraine'}},
        {id: 2, isFollowed: false, fullName: 'Alice A.', status: 'Foreign languages and daily talk', location: {city: 'Istanbul', country: 'Turkey'}},
        {id: 3, isFollowed: false, fullName: 'Okabe R.', status: 'Ohhh, timetraveling', location: {city: 'Japan', country: 'Nagasaki'}},
    ]
};

//action creator template for following function
export const followCreator = (userId) => {
  return {
      type: FOLLOW,
      userID: userId,
  }
}
//action creator template for unfollowing function
export const unFollowCreator = (userId) => {
  return {
      type: UNFOLLOW,
      userID: userId,
  }
}
//action creator template for generating users on page
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users: users,
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
                        return {...item, isFollowed: true,};
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
                        return {...item, isFollowed: false,};
                    }
                    return item;
                })
            };
        //initial users adding, get more users by a click
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        //return unchanged original state if there is not a users action
        default:
            return state;
    }
}

export default usersReducer;