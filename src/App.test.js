import React from 'react';
import ReactDOM from 'react-dom';
import OZNetwork from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OZNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
