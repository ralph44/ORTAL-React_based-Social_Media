import React, { Component } from 'react';
import './Settingspage.css';
import Navbar from '../NavbarComponent/NavbarComponent.js';


export default class Mainpage extends Component {

  render() {
    return (
    <div>
        <Navbar/>
        
        <header>
            <div className="headerForWelcome">Welcome to the Settings page</div>
        </header>

    </div>
    );
  }
}
