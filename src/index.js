import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//draw dialogues
let dialogues = [
  {id: 1, name: "Bohdan"},
  {id: 2, name: "Nikola"},
  {id: 3, name: "Arthur"},
  {id: 4, name: "Alex"},
  {id: 5, name: "Alice"},
];

//draw messages
let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Welcome to the course, bro"},
  {id: 3, message: "Heyoooou"},
  {id: 4, message: "Heyoooou"},
  {id: 5, message: "Heyoooou"},
];

//draw posts
let posts = [
  {id: 1, message: "Hi", likesCount: 12},
  {id: 2, message: "Welcome to the course, bro", likesCount: 3},
  {id: 3, message: "Heyoo, im finally here", likesCount: 0},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogues={dialogues} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
