import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoxComponent from '../BoxComponent/BoxComponent.js';
import './AlterInputComponent.css';
import UserComponent from "../Containers/UserComponent/userComponent.js";




class AlterInputComponent extends Component {

    state = {
        timeScale : "months",
    };

    changeTimeScale(newTimeScale) {
        if (newTimeScale === "days" || newTimeScale === "weeks" || newTimeScale === "months") {
            this.setState({ timeScale: newTimeScale});
        }
    }

    renderBoxes() {
        let squares = [];
        let numberOfSquares = this.squaresToRender();
        for (var i = 0; i < numberOfSquares; i++) {
            squares.push(
                <BoxComponent value={i+1}/>
            )
        }
        return squares;
    }

    squaresToRender = function() {
        let dt2 = new Date();
        let dt1 = new Date(this.props.userBirthday);

        if (this.state.timeScale === "days") {
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
        } else if (this.state.timeScale === "weeks") {
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24 * 7));
        } else if (this.state.timeScale === "months") {
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /Math.round((1000 * 60 * 60 * 24 * 7 * 4.345)));
        } else {
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24 * 7));
        }
    }

    render() {
        return (
            <div>
                <div class="squaresScaleButtons">
                  <button onClick={() => {this.changeTimeScale("days")}} >Days</button>
                  <button onClick={() => {this.changeTimeScale("weeks")}} >Weeks</button>
                  <button onClick={() => {this.changeTimeScale("months")}} >Months</button>
                </div>

                <div className="boxRenderPerimeterParent">
                  <div className="boxRenderPerimeter">
                    {this.renderBoxes()}
                  </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    userBirthday: state.user.birthday,
    userExpectedAge: state.user.expectedAge
  };
};

export default connect(mapStateToProps)(AlterInputComponent);
