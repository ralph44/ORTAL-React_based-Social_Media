import React from 'react';
import ReactDOM from 'react-dom';
import App from './Mainpage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
