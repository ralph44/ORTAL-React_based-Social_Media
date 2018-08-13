import React, { Component } from 'react';
import './Aboutpage.css';
import Navbar from '../NavbarComponent/NavbarComponent.js';


export default class Aboutpage extends Component {

  render() {
    return (
    <div>
        <Navbar/>
        <header>
            <div className="headerForWelcome">Welcome to the About page</div>
        </header>

    </div>
    );
  }
}
