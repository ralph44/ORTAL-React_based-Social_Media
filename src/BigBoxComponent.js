import React, { Component } from 'react';
import './BigBoxComponent.css';



export default class Mainpage extends Component {

    currentDateMethod = function () {
      var today = new Date(),
      date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

      var currentDateString = date;
      return currentDateString;
    }

    render() {
        return (

            <div className="box">

              <div className="bigBoxHeaderBar">
                  <div className="boxTitle">
                    <h6 className="boxTitleText">Das hier ist ja mal der geilste Titel überhaupt. Muss leider kurz sein.</h6>
                  </div>

                  <div className="boxDate">
                    <h6 className="boxDateText">{this.currentDateMethod()}</h6>
                  </div>
              </div>


              <div className="bigBoxCenterContent">
                <div className="boxImage">
                  <img src="TestImage.jpeg" alt="" />
                </div>
              </div>


              <div className="bigBoxBottomContent">
                <div className="boxDescription">

                </div>

                <div className="boxInfo">

                </div>
              </div>


            </div>

        );
    }
}
