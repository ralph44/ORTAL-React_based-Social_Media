import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SquareSideBar.css';

class SquareSideBar extends Component {

    render() {
        return(
            <div class="squareSideBarPerimeter">

            </div>
        );
    }

}

const mapStateToProps = state => {
  return {
    userAge: state.user.age
  };
};

export default connect(mapStateToProps)(SquareSideBar);
