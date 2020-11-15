//describe actions
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA';

let initialState = {
  posts: [
    {id: 1, message: "Hi", likesCount: 12},
    {id: 2, message: "Welcome to the course, bro", likesCount: 3},
    {id: 3, message: "Heyoo, im finally here", likesCount: 0},
  ],
  newPostValue: 'Type info to create a post',
}

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
    //return unchanged original state if there is not a profile action
    default:
        return state;
  }
}

export default profileReducer;