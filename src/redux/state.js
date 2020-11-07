//assign a variable for working with a rerender function
let rerenderTree = () => { };

//global variable with emulating info for posts/messges etc
let state = {
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
}

//add a new post after click
export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostValue,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewPostValue("");
  rerenderTree(state);
}

//watch for textarea changes
export const updateNewPostValue = (newText) => {
  state.profilePage.newPostValue = newText;
  rerenderTree(state);
}

//get a callback function renderTree from index.js without imports
export const subscribe = (observer) => {
  rerenderTree = observer;
}

export default state;