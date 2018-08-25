import React, { Component } from 'react';
import './Mainpage.css';
import Navbar from '../NavbarComponent/NavbarComponent.js';
import AlterInputComponent from '../AlterInputComponent/AlterInputComponent';
import SquareSideBar from '../Components/SquareSideBar/SquareSideBar.js'




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
        {/*//Werde ich noch also eigenständige Component deklarieren, damit dies nicht immer angezeigt wird.*/}
        <Navbar/>
        <header>
            <div className="headerForWelcome">Welcome to ORTAL</div>
        </header>
        <div className="mainPageMainContent">
            <div className="SquareSideBarParent">
                <SquareSideBar/>
            </div>
            <div className="AlterInputComponentParent">
                <AlterInputComponent/>
            </div>
        </div>
    </div>
    );
  }
}
