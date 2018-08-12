import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Mainpage.css';
import Navbar from '../NavbarComponent/NavbarComponent.js';
import BoxComponent from '../BoxComponent/BoxComponent.js';
import AlterInputComponent from '../AlterInputComponent/AlterInputComponent';




export default class Mainpage extends Component {

  render() {
    return (
    <div>
        {/*<Navbar/>
        <header>
            <div className="headerForWelcome">Welcome to ORTAL</div>
        </header>
        <AlterInputComponent/> */}

        <Route path="/" component={Navbar} />

        <Route path="/" exact component={AlterInputComponent} />
    </div>
    );
  }
}
