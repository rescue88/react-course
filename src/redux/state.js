import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";

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
      newMessageValue: '',
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

  //get an action and decide what to do after
  dispatch(action) {
    //call reducers
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
    //rerender tree after reducers returned _state
    this._getSubscriber(this._state);
  },
};

export default store;
window.store = store;