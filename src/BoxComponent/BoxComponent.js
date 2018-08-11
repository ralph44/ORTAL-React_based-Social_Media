import React, { Component } from 'react';
import './BoxComponent.css'
import BigBoxComponent from '../BigBoxComponent/BigBoxComponent';


export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        if (this.state.showComponent == false){
        this.setState({
            showComponent: true,
        });
        } else {
            this.setState({
                showComponent: false,
            });
        }
    }

    render() {
        return (
            <button onClick={this._onButtonClick}>
            <div className="box">

              <div className="boxTitle">
                <h6 className="boxTitleProps">Ja Moin!</h6>
              </div>

              <div className="boxDate">
                <h6>{Date()}</h6>
              </div>

              <div className="boxImage">

              </div>

              <div className="boxDescription">

              </div>

            </div>
                {this.state.showComponent ?
                    <BigBoxComponent /> :
                    null
                }
            </button>
        );
    }
}
