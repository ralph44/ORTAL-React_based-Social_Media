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
                <button class="sideBarButton">{this.props.userTopics[i].name}</button>
            )
        };
        return this.state.squareTopicList;
    }

    accordionJs() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
    }

    componentDidMount() {
        this.accordionJs()
    }

    render() {
        return(
            <div class="squareSideBarPerimeter">
                <button class="accordion">SquareTopics</button>
                <div class="panel">
                  {this.getUserTopics()}
                </div>

                <button class="accordion">Friends?</button>
                <div class="panel">
                  <p>Hier noch geiler shit rein.</p>
                </div>

                <button class="accordion">Something else</button>
                <div class="panel">
                  <p>Hier auch! Wird nice.</p>
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
