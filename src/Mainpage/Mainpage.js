import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Mainpage.css';
import Navbar from '../NavbarComponent/NavbarComponent.js';
import AlterInputComponent from '../AlterInputComponent/AlterInputComponent';




export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {page: ''};
    }

      Notification({ state }) {
        switch(state) {
            case 'info':
            case 'warning':
            case 'error':
            default:
                return <AlterInputComponent/>;
        }
    }


  render() {
    return (
    <div>
        <Navbar/>
        <header>
            <div className="headerForWelcome">Welcome to ORTAL</div>
        </header>
        <AlterInputComponent/>
    </div>
    );
  }
}
