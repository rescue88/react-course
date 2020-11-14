//describe actions
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoLink: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564',
            isFollowed: true, fullName: 'Bohdan Z.',
            status: 'I am a boss',
            location: {city: 'Romny', country: 'Ukraine'}
        },
        {
            id: 2,
            photoLink: 'https://static.wikia.nocookie.net/swordartonline/images/d/d4/Alice_Synthesis_Thirty.png/revision/latest?cb=20190127122239',
            isFollowed: false,
            fullName: 'Alice A.',
            status: 'Foreign languages and daily talk',
            location: {city: 'Istanbul', country: 'Turkey'}
        },
        {
            id: 3,
            photoLink: 'https://practicaltyping.com/wp-content/uploads/2019/02/okabe.jpg',
            isFollowed: false,
            fullName: 'Okabe R.',
            status: 'Ohhh, timetraveling',
            location: {city: 'Japan', country: 'Nagasaki'}
        },
        {
            id: 4,
            photoLink: 'https://kg-portal.ru/img/84693/main.jpg',
            isFollowed: true,
            fullName: 'Arthur L.',
            status: 'Im gay cuz i like football',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
    ]
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