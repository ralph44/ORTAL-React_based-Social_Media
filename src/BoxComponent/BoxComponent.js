import React, { Component } from 'react';
import './BoxComponent.css'
import BigBoxComponent from '../BigBoxComponent/BigBoxComponent';
import Modal from 'react-responsive-modal';


export default class BoxComponent extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        const {open} = this.state;
        return (
          <div className="bigBoxContainer">
            <button onClick={this.onOpenModal}>
            <div className="box">

              <div className="boxTitle">
                {this.props.value}
              </div>

              <div className="boxDate">
                <h6>Datum</h6>
              </div>

              <div className="boxImage">

              </div>

              <div className="boxDescription">

              </div>

            </div>
            <Modal
                open={open}
                onClose={this.onCloseModal}
                center
                showCloseIcon={false}
            >
                <BigBoxComponent value={this.props.value}/>
            </Modal>
            </button>
          </div>
        );
    }
}
