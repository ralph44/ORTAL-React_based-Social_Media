import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Mainpage from '../Mainpage/Mainpage.js';
import About from '../Aboutpage/Aboutpage';
import Profile from '../Profilepage/Profilepage';
import '../Mainpage/Mainpage.css'
import Settings from "../Settingspage/Settingspage";
import Login from "../Login/Login";

import requireAuth from '../Utils/requireAuth';


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={requireAuth(Mainpage)}/>
                <Route path="/login" component={Login} />
                <Route path="/mainpage" component={requireAuth(Mainpage)} />
                <Route path="/about" component={requireAuth(About)}/>
                <Route path="/profile" component={requireAuth(Profile)}/>
                <Route path="/settings" component={requireAuth(Settings)}/>
            </div>
        </BrowserRouter>
    );
  }
}
