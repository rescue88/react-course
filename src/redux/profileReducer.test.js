const { default: profileReducer, addPost, deletePost } = require("./profileReducer");

//default initial state from a reducer only with a testing parts
let state = {
  posts: [
    {id: 1, message: "Hi", likesCount: 12},
    {id: 2, message: "Welcome to the course, bro", likesCount: 3},
    {id: 3, message: "Heyoo, im finally here", likesCount: 0},
  ],
}

//test a length of a posts mass
test('length of posts should be incremented', () => {
  //action creator to add a post
  let action = addPost("HEYOO, im here");

  //simulating what we need to do
  let newState = profileReducer(state, action);

  //expectations
  expect(newState.posts.length).toBe(4);
});

//test data in a new post 
test('data in a new post should be correct', () => {
  //default data
  let message = "hahaha";
  let likesCount = 0;

  //action creator to add a post
  let action = addPost(message);

  //simulating what we need to do
  let newState = profileReducer(state, action);

  //expectations
  expect(newState.posts[newState.posts.length - 1].message === message && newState.posts[newState.posts.length - 1].likesCount === likesCount).toBe(true);
});

//test a deleting from posts
test('posts length should be decremented', () => {
  //default data
  let startLength = state.posts.length;

  //action creator to add a post
  let action = deletePost(1);

  //simulating what we need to do
  let newState = profileReducer(state, action);

  //expectations
  expect(startLength - newState.posts.length).toBe(1);
});