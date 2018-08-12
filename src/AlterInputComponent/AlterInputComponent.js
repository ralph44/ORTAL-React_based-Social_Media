import React, { Component } from 'react';
import BoxComponent from '../BoxComponent/BoxComponent.js';
import './AlterInputComponent.css';




export default class AlterInputComponent extends Component {
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
                <div className="divForAlterInput">
                    <input className="inputForAlter"
                        placeholder="Alter eingeben"
                        onChange={this.handleChange}
                        value={this.state.inputText}
                    />
                    <button className="buttonForInput" onClick={this.handleSave}>Okay</button>
                </div>
                <br/>
                <div className="boxRenderPerimeterParent">
                  <div className="boxRenderPerimeter">
                      {this.renderBox()}
                  </div>
                </div>


            </div>
        );
    }
}
