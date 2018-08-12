import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

import './App.css';
import Mainpage from '../Mainpage/Mainpage.js';
import Login from "../Login/Login";
import About from '../Aboutpage/Aboutpage';
import Profile from '../Profilepage/Profilepage';
import '../Mainpage/Mainpage.css'
import Settings from "../Settingspage/Settingspage";




export default class App extends Component {

  render() {

    return (

        <BrowserRouter>
            <div>
            <Route path="/" component={Mainpage} />
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
        
    );
  }
}
