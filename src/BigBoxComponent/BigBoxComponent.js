import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BigBoxComponent.css';



class BigBoxComponent extends Component {

    currentDateMethod = function () {
      var today = new Date(),
      date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

      var currentDateString = date;
      return currentDateString;
    }

    getBoxParagraph = function () {
      if(this.props.value <= this.props.userSquares.length - 1){
        return this.props.userSquares[this.props.value - 1].text
      } else return ""
    }

    getBoxTitle = function () {
      if(this.props.value <= this.props.userSquares.length - 1){
        return this.props.userSquares[this.props.value - 1].title
      } else return ""
    }

    getBigBoxStyleCss = function () {
      if(this.props.value === this.props.userAge) {
        return "bigBoxToday"
      } else if (this.props.value < this.props.userAge) {
        return "bigBoxPast"
      } else return "bigBoxFuture"
    }

    render() {
        return (

            <div className={this.getBigBoxStyleCss()}>
                {this.props.value}
              <div className="bigBoxHeaderBar">
                  <div className="bigBoxTitle">
                    <h6 className="bigBoxTitleText">{this.getBoxTitle()}</h6>
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
                  <p>
                    {this.getBoxParagraph()}
                  </p>
                </div>

                <div className="bigBoxInfo">

                </div>
              </div>


            </div>

        );
    }
}

const mapStateToProps = state => {
  return {
    userAge: state.user.age,
    userExpectedAge: state.user.expectedAge,
    userSquares: state.user.squares
  };
};

export default connect(mapStateToProps)(BigBoxComponent);
