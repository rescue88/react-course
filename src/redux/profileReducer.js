import { profileAPI } from "../api/api";

/* ===ACTIONS=== */

const ADD_POST = 'profileReducer/ADD-POST';
const SET_USER_PROFILE = 'profileReducer/SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'profileReducer/SET-PROFILE-STATUS';
const DELETE_POST = 'profileReducer/DELETE-POST';

/* ===/ACTIONS=== */

/* ===STATE=== */

let initialState = {
  posts: [
    {id: 1, message: "Hi", likesCount: 12},
    {id: 2, message: "Welcome to the course, bro", likesCount: 3},
    {id: 3, message: "Heyoo, im finally here", likesCount: 0},
  ],
  profile: null,
  status: '',
}

/* ===/STATE=== */

/* ===ACTION CREATORS=== */

//action creator template for addPost function
export const addPost = (postMessage) => {
  return {
      type: ADD_POST,
      postMessage,
  }
}
//delete post
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  }
}
//set user's profile data
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}
//change user status
export const setProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status,
  }
}

/* ===/ACTION CREATORS=== */

/* ===THUNKS=== */

export const getProfileData = (userId => {
  return async (dispatch) => {
    let data = await profileAPI.getProfileInfo(userId);
    dispatch(setUserProfile(data));
  }
});

export const getProfileStatus = (userId => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setProfileStatus(data));
  }
});

export const updateProfileStatus = (status => {
  return async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if(data.resultCode === 0) {
      dispatch(setProfileStatus(status));
    }
  }
})

/* ===/THUNKS=== */

/* ===REDUCER LOGIC=== */

//return changed state after a right action
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    //add a new post by click
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 4, message: action.postMessage, likesCount: 0,}],
        newPostValue: '',
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter( item => item.id !== action.postId ),
      }
    //return unchanged original state if there is not a profile action
    default:
        return state;
  }
}

/* ===/REDUCER LOGIC=== */

export default profileReducer;