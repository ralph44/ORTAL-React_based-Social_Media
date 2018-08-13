import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

import './App.css';
import Mainpage from '../Mainpage/Mainpage.js';
import About from '../Aboutpage/Aboutpage';
import Profile from '../Profilepage/Profilepage';
import '../Mainpage/Mainpage.css'
import Settings from "../Settingspage/Settingspage";




export default class App extends Component {

  render() {

    return (

        <BrowserRouter>
            <div>
              {/*der Tag 'exact' führt dazu, dass der link genau dem entsprechen
               muss, was als path angegeben ist, damit das dazugehörige component
               gerendert wird. Ansonten wird alles was '/' auch nur BEHINHALTET
               ebenfalls gerendert.*/}
            <Route exact path="/" component={Mainpage} />
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>

    );
  }
}
