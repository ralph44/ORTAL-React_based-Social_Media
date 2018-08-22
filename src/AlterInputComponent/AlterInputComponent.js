import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoxComponent from '../BoxComponent/BoxComponent.js';
import './AlterInputComponent.css';
import UserComponent from "../Containers/UserComponent/userComponent.js";




class AlterInputComponent extends Component {

    state = {
        timeScale : "months",
        squares : []
    };

    changeTimeScale(newTimeScale) {
        if (newTimeScale === "days" || newTimeScale === "weeks" || newTimeScale === "months") {
            this.setState({ timeScale: newTimeScale});
        }
    }

    celebrationDate(birthday) {
        let celebDate = new Date(birthday);
        let celebDateFinal = new Date(celebDate.setFullYear(celebDate.getFullYear() + this.props.userExpectedAge));
        let daysToCelebDayDifference = this.daysBetweenDates(celebDateFinal, birthday)
        console.log(daysToCelebDayDifference);
        return daysToCelebDayDifference;
    }

    renderBoxes(numberOfSquaresToRender) {
        this.state.squares = [];
        for (var i = 0; i < numberOfSquaresToRender; i++) {
            this.state.squares.push(
                <BoxComponent value={i+1}/>
            )
        }
        return this.state.squares;
    }

    daysBetweenDates = function(newDate, oldDate) {
        let dt2 = new Date(newDate);
        let dt1 = new Date(oldDate);

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
                <div className="squaresScaleButtons">
                  <button onClick={() => {this.changeTimeScale("days")}} >Days</button>
                  <button onClick={() => {this.changeTimeScale("weeks")}} >Weeks</button>
                  <button onClick={() => {this.changeTimeScale("months")}} >Months</button>
                </div>

                <div className="boxRenderPerimeterParent">
                  <div className="boxRenderPerimeter">
                    {this.renderBoxes(this.celebrationDate(this.props.userBirthday))}
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
