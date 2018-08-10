import React, { Component } from 'react';
import './App.css';
import './Login.css';
import Mainpage from "./Mainpage";


export default class Login extends Component {
    calc(){
        const val1= 1;
        const val2= 3;
        const value = val1 + val2;
        return <div>{value}</div>;
    }
  render() {


    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={window.location.origin + '/img/LogoSocialMedia.jpeg'} />
            </div>

            <form className="login100-form validate-form" action='/startpage'>
              <span className="login100-form-title">
                ORT&Lambda;L Login {this.calc()}
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email"></input>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password"></input>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Login
                </button>
              </div>

              <div className="text-center p-t-12">

                <a className="txt2" href="#">
                  Username / Password vergessen?
                </a>
              </div>

              <div className="text-center p-t-136">

                <a className="txt2" href="#">
                  Neuen Account erstellen
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
