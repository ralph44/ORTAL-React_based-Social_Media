import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Mainpage from '../Mainpage/Mainpage.js';
import Login from "../Login/Login";
import '../Mainpage/Mainpage.css'




export default class App extends Component {

  render() {

    return (
        <BrowserRouter>
          <div>
              <Mainpage />
          </div>
        </BrowserRouter>
        
    );
  }
}
