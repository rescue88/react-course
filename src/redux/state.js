//unmutable variables
//for MyPosts
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA';
//for Messages
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA';

//store all data
let store = {
  //private variable - storing all the testing info
  _state : {
    profilePage: {
      posts: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "Welcome to the course, bro", likesCount: 3},
        {id: 3, message: "Heyoo, im finally here", likesCount: 0},
      ],
      newPostValue: 'Type info to create a post',
    },
    dialoguesPage: {
      dialogues: [
        {id: 1, name: "Bohdan"},
        {id: 2, name: "Nikola"},
        {id: 3, name: "Arthur"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Alice"},
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Welcome to the course, bro"},
        {id: 3, message: "Heyoooou"},
        {id: 4, message: "Heyoooou"},
        {id: 5, message: "Heyoooou"},
      ],
      newMessageValue: 'Enter a message',
    },
  },
  //empty function template to get another from subscriber
  _getSubscriber() { },

  //return a _state variable
  getState() {
    return this._state;
  },
  //get a callback and assign it for _getSubscriber
  subscribe(observer) {
    this._getSubscriber = observer;
  },

  //store functions
  dispatch(action) {
    //add a post after button clicked
    switch(action.type) {
      //add a new post after click
      case ADD_POST:
        let newPost = {
          id: 4,
          message: this._state.profilePage.newPostValue,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostValue = '';
        this._getSubscriber(this._state);
        break;
      //change global variable after textarea changes
      case UPDATE_POST_TEXTAREA:
        this._state.profilePage.newPostValue = action.newText;
        this._getSubscriber(this._state);
        break;
      case ADD_MESSAGE:
        let newMessage = {
          id: 6,
          message: this._state.dialoguesPage.newMessageValue,
        };
        this._state.dialoguesPage.messages.push(newMessage);
        this._state.dialoguesPage.newMessageValue = '';
        this._getSubscriber(this._state);
        break;
      case UPDATE_MESSAGE_TEXTAREA:
        this._state.dialoguesPage.newMessageValue = action.newText;
        this._getSubscriber(this._state);
        break;
    }
  },
};

//action creator template for addPost function
export const addPostActionCreator = () => {
  return {
      type: ADD_POST,
  }
}
//action creator template for onPostChange function
export const updateNewPostValueActionCreater = (text) => {
  return {
      type: UPDATE_POST_TEXTAREA,
      newText: text,
  }
}

//action creator template for addMessage function
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  }
}
//action creator template for onMessageChange function
export const updateNewMessageValueActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXTAREA,
    newText: text,
  }
}

export default store;
window.store = store;