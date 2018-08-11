import React, { Component } from 'react';
import './BoxComponent.css';



export default class Mainpage extends Component {

    render() {
        return (

            <div className="box">

              <div className="boxTitle">
                <h6 className="boxTitleProps">Ja Moin!</h6>
              </div>

              <div className="boxDate">
                <h6>{Date()}</h6>
              </div>

              <div className="boxImage">

              </div>

              <div className="boxDescription">

              </div>

            </div>

        );
    }
}
