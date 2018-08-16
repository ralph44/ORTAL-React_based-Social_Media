import React, { Component } from 'react';
import { BrowserRouter , Route, Redirect} from 'react-router-dom';

import './App.css';
import Mainpage from '../Mainpage/Mainpage.js';
import About from '../Aboutpage/Aboutpage';
import Profile from '../Profilepage/Profilepage';
import '../Mainpage/Mainpage.css'
import Settings from "../Settingspage/Settingspage";
import Login from "../Login/Login";
import axios from "axios";




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: false
        }
    }
    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        const password = e.target.elements.pw.value;
        axios.get(`http://localhost:3001/user/${user}/${password}`).then((res) => {
            const message = res.data.message;
            if (message == 'hella'){
                console.log("RICHTIG!!!!!!!!!!");
            } else {
                console.log("falsch!!!!!!!!!!");
            }
        })
    };

  render() {

    return (

        <BrowserRouter>
            <div>
              {/*der Tag 'exact' führt dazu, dass der link genau dem entsprechen
               muss, was als path angegeben ist, damit das dazugehörige component
               gerendert wird. Ansonten wird alles was '/' auch nur BEHINHALTET
               ebenfalls gerendert.*/}
            <Route exact path="/" render={()=><Login valid={this.getUser}/>} />
                <Route path="/Mainpage" component={Mainpage} />
                <Route path="/about" component={About}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/settings" component={Settings}/>
                </div>
                </BrowserRouter>

    );
  }
}
