import { rerenderTree } from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi", likesCount: 12},
      {id: 2, message: "Welcome to the course, bro", likesCount: 3},
      {id: 3, message: "Heyoo, im finally here", likesCount: 0},
    ],
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

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 4,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderTree(state);
}

export default state;