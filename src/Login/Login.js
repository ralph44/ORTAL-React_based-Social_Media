import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import '../App/App.css';
import './Login.css';
import axios from 'axios';

class Login extends Component {

    renderRedirect = () => {
        if (this.props.userAuthenticated === true) {
            return <Redirect to='/Mainpage' />
        }
    };
    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        const password = e.target.elements.pw.value;
        axios.get(`http://gacrux.uberspace.de:61001/user/${user}/${password}`).then((res) => {
            const message = res.data.message;
            if (message === 'hella'){
                this.props.onLoginSuccess();      {/*use this line to immutably set the authentication prop to true. replace the command just above it*/}
            } else {
                this.props.onLoginFail();
            }
        })
    };

  render() {


    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={window.location.origin + '/img/LogoSocialMedia.jpeg'} />
            </div>

            <form className="login100-form validate-form" onSubmit={this.getUser}>
              <span className="login100-form-title">
                ORT&Lambda;L Login
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="username" placeholder="Email"></input>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pw" placeholder="Password"></input>
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
          {this.renderRedirect()}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    userAuthenticated: state.user.authenticated,
  }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginSuccess: () => dispatch({type: 'LOGINATTEMPTSUCCESS'}),
        onLoginFail: () => dispatch({type: 'LOGINATTEMPTFAIL'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
