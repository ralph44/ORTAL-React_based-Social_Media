import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SquareSideBar.css';

class SquareSideBar extends Component {

    state = {
        squareTopicList : []
    }

    getUserTopics() {
        for (var i = 0; i < 3; i++) {
            this.state.squareTopicList.push(
                <button class="button sideBarButton">{this.props.userTopics[i].name}</button>
            )
        };
        return this.state.squareTopicList;
    }

    render() {
        return(
            <div class="squareSideBarPerimeter">
                <div className="squareSideBarTopics">
                    {this.getUserTopics()}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
  return {
    userAge: state.user.age,
    userTopics: state.user.squareTopics
  };
};

export default connect(mapStateToProps)(SquareSideBar);
