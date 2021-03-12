import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserComponent extends Component {
    state = {
      age: 20
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
