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

            <div className="bigBox">

              <div className="bigBoxHeaderBar">
                  <div className="bigBoxTitle">
                    <h6 className="bigBoxTitleText">Das hier ist ja mal der geilste Titel überhaupt. Muss leider kurz sein.</h6>
                  </div>

                  <div className="bigBoxDate">
                    <h6 className="bigBoxDateText">{this.currentDateMethod()}</h6>
                  </div>
              </div>


              <div className="bigBoxCenterContent">
                <div className="bigBoxImage">
                  <img src="TestImage.jpeg" alt="" />
                </div>
              </div>


              <div className="bigBoxBottomContent">
                <div className="bigBoxDescription">

                </div>

                <div className="bigBoxInfo">

                </div>
              </div>


            </div>

        );
    }
}
