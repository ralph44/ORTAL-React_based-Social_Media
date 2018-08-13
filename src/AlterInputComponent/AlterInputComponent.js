import React, { Component } from 'react';
import BoxComponent from '../BoxComponent/BoxComponent.js';
import './AlterInputComponent.css';
import InputValidation from "../InputValidationText/InputValidation.js";




export default class AlterInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', inputText: '', valid:false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
        var numberRegex = /^\d+$/;
        if (numberRegex.test(e.target.value)){
            this.setState({ valid: true });
        } else {
            this.setState({ valid: false});
        }
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
                    <BoxComponent value={i+1}/>
                )
            }
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
                    { this.state.valid ? <button className="buttonForInput" onClick={this.handleSave}>Okay</button> : null }
                    <InputValidation name={this.state.valid}/>
                </div>

                <div className="boxRenderPerimeterParent">
                  <div className="boxRenderPerimeter">
                      {this.renderBox()}
                  </div>
                </div>


            </div>
        );
    }
}
