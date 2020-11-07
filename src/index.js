import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, subscribe, updateNewPostValue } from './redux/state';

const rerenderTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostValue={updateNewPostValue} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderTree(state);

subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();