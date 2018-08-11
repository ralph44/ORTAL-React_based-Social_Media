import React, { Component } from 'react';
import './Mainpage.css';
import Navbar from './NavbarComponent.js';
import BoxComponent from './BoxComponent.js';
import BigBoxComponent from './BigBoxComponent.js';




export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', inputText: '', mode:'view'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    handleSave() {
        this.setState({text: this.state.inputText, mode: 'view'});
    }

    renderInputField() {
        let input;
        input =
            <div>
            <p>
                Alter:</p>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputText} />
        <button onClick={this.handleSave}>Save</button>
            </div>

        return input;
    }

    renderBox() {
        let button = [];
        if(this.state.text !== ''){
            var i;
            for (i = 0; i < this.state.text; i++) {
                button.push(
                    <BoxComponent/>
                )
            }
        } else {

        }
        return button;
    }

  render() {
    return (
    <div>
        <Navbar/>

        <header>
            <div>Welcome to ORTAL</div>
        </header>
        {this.renderInputField()}

        <div>
          {this.renderBox()}
        </div>

    </div>
    );
  }
}
