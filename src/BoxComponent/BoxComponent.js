import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BoxComponent.css'
import BigBoxComponent from '../BigBoxComponent/BigBoxComponent';
import Modal from 'react-responsive-modal';


class BoxComponent extends Component {
    state = {
        open: false,
        height: this.props.height,
        width: this.props.width
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    getBoxStyleCss = function () {
      if(this.props.value === this.props.userAge) {
        return "boxToday"
      } else if (this.props.value < this.props.userAge) {
        return "boxOld"
      } else return "boxFuture"
    };

    render() {
        const {open} = this.state;
        return (
          <div className="bigBoxContainer">
            <button onClick={this.onOpenModal}>
            <div className={this.getBoxStyleCss()}>
              <div className="boxTitle">
                {this.props.value}
              </div>
            </div>
            </button>

            <Modal
                open={open}
                onClose={this.onCloseModal}
                center
                showCloseIcon={false}
            >
                <BigBoxComponent value={this.props.value}/>
            </Modal>
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

export default connect(mapStateToProps)(BoxComponent);
