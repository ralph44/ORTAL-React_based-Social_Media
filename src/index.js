import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { Login } from './Login/Login';


ReactDOM.render(

   <App />,document.getElementById('root')

);

registerServiceWorker();
