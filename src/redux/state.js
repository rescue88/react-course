//store all data
let store = {
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
    },
  },
  getState() {
    return this._state;
  },
  _rerenderTree() { },
  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostValue,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this.updateNewPostValue("");
    this._rerenderTree(this._state);
  },
  updateNewPostValue(newText) {
    this._state.profilePage.newPostValue = newText;
    this._rerenderTree(this._state);
  },
  subscribe(observer) {
    this._rerenderTree = observer;
  },
};
export default store;
window.store = store;