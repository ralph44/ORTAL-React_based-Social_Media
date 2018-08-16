import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoxComponent from '../BoxComponent/BoxComponent.js';
import './AlterInputComponent.css';
import UserComponent from "../Containers/UserComponent/userComponent.js";




class AlterInputComponent extends Component {

    renderBoxes() {
        let squares = [];
        for (var i = 0; i < this.props.userExpectedAge; i++) {
            squares.push(
                <BoxComponent value={i+1}/>
            )
        }
        return squares;
    }

    render() {
        return (
            <div>
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
    userAge: state.user.age,
    userExpectedAge: state.user.expectedAge
  };
};

export default connect(mapStateToProps)(AlterInputComponent);
