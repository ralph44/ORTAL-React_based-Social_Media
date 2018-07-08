import React, { Component } from 'react';
import './Calculator.css';
import AnimatedWrapper from "./AnimatedWrapper";



class Calculator extends Component {

  handleChange(e, id){
    var result1 = "";
    var result = id + result1;
    this.props.changeResult(result);
  }
  sum(x1, x2){
    var result = parseInt(x1) + parseInt(x2);
    return result;
  }
  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div>
              Welcome to ORT&Lambda;L
            </div>

          </div>
        </div>
      </div>
    );
  }
}
const CalculatorComp = AnimatedWrapper(Calculator);
export default CalculatorComp;
