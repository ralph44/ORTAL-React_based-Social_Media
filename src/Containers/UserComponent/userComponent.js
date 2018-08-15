import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserComponent extends Component {
    state = {
      age: 2
    }


    render() {
      return (
        <h3>{this.props.numSquares}</h3>
      )
    }

}

const mapStateToProps = state => {
  return {
    numSquares: state.user.age
  };
};

export default connect(mapStateToProps)(UserComponent);

{/*The purpose of a “container component” is to gather and pass data
  into a presentational component. Container components are used to
  connect to stores, fetch data during various lifecycle methods, and
  otherwise gather and transfer data to child components.*/}
