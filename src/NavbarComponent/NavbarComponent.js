import React, { Component } from 'react';
import './NavbarComponent.css';



export default class Mainpage extends Component {

    render() {
        return (
            <div className="navbarParent">

              <div className="navbarElement">
                <img src={'/one.jpeg'} />
              </div>

              <div className="navbarElement-active">
                <a className="navbarElementText-active" href="#" >Home</a>
              </div>

              <div className="navbarElement">
                <a className="navbarElementText" href="#" >Profile</a>
              </div>

              <div className="navbarElement">
                <a className="navbarElementText" href="#" >Settings</a>
              </div>

              <div className="navbarElement">
                <a className="navbarElementText" href="#" >About</a>
              </div>

              <div className="navbarElement-search">
                <input type="text" placeholder="Search.."></input>
              </div>

            </div>
        );
    }
}
