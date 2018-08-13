import React, { Component } from 'react';

export default class InputValidation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.name);
        if (this.props.name == false) {
            return <p className="notValid">Bitte nur Zahlen eingeben</p>
        }else {
            return <div></div>
        };
        return (
            <div>

            </div>
        );
    }
}

