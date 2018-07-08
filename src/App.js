import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      result: "0",
    }
  }
  changeResult(result){
    this.setState({result});
  }
  render() {

    return (

        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Login {...rest} />}
            </TransitionGroup>
        )} />
        <Route
           path="/startpage"
           children={({ match, ...rest }) => (
             <TransitionGroup component={firstChild}>
               {match && <Calculator {...rest} />}
             </TransitionGroup>
        )} />


    );
  }
}
