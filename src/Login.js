import React, { Component } from 'react';
import './App.css';
import './Login.css';


export default class Login extends Component {
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
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src={window.location.origin + '/img/LogoSocialMedia.jpeg'} />
            </div>

            <form class="login100-form validate-form" action='/startpage'>
              <span class="login100-form-title">
                ORT&Lambda;L Login
              </span>

              <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input class="input100" type="text" name="email" placeholder="Email"></input>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate = "Password is required">
                <input class="input100" type="password" name="pass" placeholder="Password"></input>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  Login
                </button>
              </div>

              <div class="text-center p-t-12">

                <a class="txt2" href="#">
                  Username / Password vergessen?
                </a>
              </div>

              <div class="text-center p-t-136">

                <a class="txt2" href="#">
                  Neuen Account erstellen
                  <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
