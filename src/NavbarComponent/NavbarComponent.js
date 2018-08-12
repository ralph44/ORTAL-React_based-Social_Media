import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavbarComponent.css';



export default class NavbarComponent extends Component {

    render() {
        return (
            <div className="navbarParent">

              <div className="navbarElement">
                {/*}<img src={'./NavBarLogo/logo_noBG.png'} /> */}
                <img className="logoNavBar" src={require('./NavBarLogo/logo_noBG.png')} />
              </div>

              <div className="navbarElement">
                <Link to="/" className="navbarElementText">Home</Link>
              </div>

              <div className="navbarElement">
                <Link to="/profile" className="navbarElementText">Profile</Link>
              </div>

              <div className="navbarElement">
                <Link to="/settings" className="navbarElementText">Options</Link>
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
