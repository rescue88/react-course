/* ===ACTIONS=== */

import { profileAPI } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

/* ===/ACTIONS=== */

/* ===STATE=== */

let initialState = {
  posts: [
    {id: 1, message: "Hi", likesCount: 12},
    {id: 2, message: "Welcome to the course, bro", likesCount: 3},
    {id: 3, message: "Heyoo, im finally here", likesCount: 0},
  ],
  profile: null,
  newPostValue: 'Type info to create a post',
}

/* ===/STATE=== */

/* ===ACTION CREATORS=== */

//action creator template for addPost function
export const addPost = () => {
  return {
      type: ADD_POST,
  }
}
//action creator template for onPostChange function
export const updateNewPostValue = (text) => {
  return {
    type: UPDATE_POST_TEXTAREA,
    newText: text,
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}

/* ===/ACTION CREATORS=== */

/* ===THUNKS=== */

export const getProfileData = (userId => {
  return (dispatch) => {
    profileAPI.getProfileInfo(userId).then( data => {
      dispatch(setUserProfile(data));
    });
  }
})

/* ===/THUNKS=== */

/* ===REDUCER LOGIC=== */

//return changed state after a right action
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    //add a new post by click
    case ADD_POST:
      let text = state.newPostValue;
      return {
        ...state,
        posts: [...state.posts, {id: 4, message: text, likesCount: 0,}],
        newPostValue: '',
      }
    //look for changes in new post textarea
    case UPDATE_POST_TEXTAREA:
      return {
        ...state,
        newPostValue: action.newText,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    //return unchanged original state if there is not a profile action
    default:
        return state;
  }
}

/* ===REDUCER LOGIC=== */

export default profileReducer;