import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BigBoxComponent.css';
import axios from 'axios';
import {css} from "react-emotion";
import {ClipLoader} from "react-spinners";

const override = css`
    display: none;
    margin: 0 auto;
    border-color: red;
`;

class BigBoxComponent extends Component {
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            boxTitle: ''
        };
    }

    currentDateMethod = function (zone) {
      var today = new Date();
      var date = new Date();
      if(zone === "eur") {
          date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      } else if(zone === "usa") {
          date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
      } else {
          date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      }

      var currentDateString = date;
      return currentDateString;
    }

    getBoxParagraph = function () {
      if(this.props.value <= this.props.userSquares.length - 1){
        return this.props.userSquares[this.props.value - 1].text
      } else return ""
    };

    getBigBoxStyleCss = function () {
      if(this.props.value === this.props.userAge) {
        return "bigBoxToday"
      } else if (this.props.value < this.props.userAge) {
        return "bigBoxPast"
      } else return "bigBoxFuture"
    };

    componentDidMount(){
        this.getBoxTitle();
    }

    getBoxTitle = function () {
        axios.get('http://gacrux.uberspace.de:61001/box/1').then((res) =>{
            const message = res.data.message;
            this.setState({
                isLoading: false,
                boxTitle: message
            })
        })
    };

    render() {
        if (this.state.isLoading == true){
            return (
            <div className='sweet-loading'>
                <ClipLoader
                    className={override}
                    sizeUnit={"px"}
                    size={300}
                    color={'#123abc'}
                    loading={this.state.loading}
                />
            </div>);
        }
        return (
        <div>
            <div className={this.getBigBoxStyleCss()}>
                {this.props.value}
              <div className="bigBoxHeaderBar">
                  <div className="bigBoxTitle">
                    <textarea className="bigBoxTitleInput" rows="2" cols="58" maxlength="75">
                        {"Das kommt von der API: " + this.state.boxTitle + " aka BoxTitle"}
                    </textarea>
                  </div>

                  <div className="bigBoxDate">
                    <h6 className="bigBoxDateText">{this.currentDateMethod("eur")}</h6>
                  </div>
              </div>


              <div className="bigBoxCenterContent">
                <div className="bigBoxImage">
                  <img src="TestImage.jpeg" alt="" />
                </div>
              </div>


              <div className="bigBoxBottomContent">
                <div className="bigBoxDescription">
                  <textarea className="bigBoxDescriptionInput" rows="14" cols="58">
                     {this.getBoxParagraph()}
                  </textarea>
                </div>

                <div className="bigBoxInfo">

                </div>
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
