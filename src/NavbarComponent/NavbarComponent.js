import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavbarComponent.css';



export default class Mainpage extends Component {

    render() {
        return (
            <div className="navbarParent">

              <div className="navbarElement">
                <img src={'/one.jpeg'} />
              </div>

              <div className="navbarElement-active">
                <Link to="/" className="navbarElementText-active">Home</Link>
              </div>

              <div className="navbarElement">
                <Link to="/profile" className="navbarElementText">Profile</Link>
              </div>

              <div className="navbarElement">
                <Link to="/settings" className="navbarElementText">Settings</Link>
              </div>

              <div className="navbarElement">
                <Link to="/about" className="navbarElementText">About</Link>
              </div>

              <div className="navbarElement-search">
                <input type="text" placeholder="Search.."></input>
              </div>

            </div>
        );
    }
}
