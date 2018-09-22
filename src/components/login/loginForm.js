import React from "react";
import LoginFooter from "./loginFooter";

export default class LoginForm extends React.Component 
{
    constructor(user, submitForm) {
      super();
      this.submitForm = submitForm;
      this.user = user
    }

    render() {
        return (
          <div className="col-6 login__right-sidebar">
            <div className="row justify-content-center">
              <div className="col-8"><img className="login__logo mt-4 mb-2" src="https://www.codeschool.com/assets/meta/og-logo-c95fcf45b709b6f818fa95abff33fe2df595837a399c13b8516e7a486e9746eb.png" alt="msp logo"/>
                <div className="card card--no-outline card--shadow mb-3 px-4">
                  <div className="card-body">
                    <h1 className="login__title--green mb-4">Login to MSP</h1>
                    <hr/>
                    <div className="form-group">
                      <label htmlFor="username-email">Username / Email Address</label>
                      <input className="form-control" id="username-email" type="text" value={this.user.userName}/>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Password</label>
                      <input className="form-control" id="password" type="password" value={this.user.password}/>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-info btn--shadowed" type="button" onClick={this.submitForm(this.user.userName,this.user.password)}> <i className="fa fa-user btn__icon"></i>Login</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text--styling mr-2">Forgot Password?</p>
                  <button className="btn btn-link btn--no-decoration text--styling" type="button">Click Here!</button>
                </div>
              </div>
            </div>
            <div className="login__footer">
              <div className="row justify-content-center">
                <div className="col-10">
                    <hr/>
                </div>
              </div>
              <div className="text-center"><small className="product__footer">All Right Reserved 2018. © Copyright 2018. Designed and Developed by </small></div>
            </div>
          </div>
        );
    };
}