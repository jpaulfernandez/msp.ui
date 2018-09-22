import React from "react";
import Sidebar from "../../components/login/sidebar";
import { connect } from "react-redux";
import { login, loggedout } from "../../actions/login";
import {Redirect} from "react-router-dom";

const mapStateToProps = (state) => {
    let { login } = state;
    let { isLoggedIn } = login;
    return {isLoggedIn};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userName, password) => dispatch(login(userName, password)),
        onLogout: () => dispatch(loggedout())
    }
}

class Login extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState(
            {[name]:value}
        );
    }

    render() {
        const { isLoggedIn, onLogin } = this.props;
        const { username, password } = this.state;
        if (isLoggedIn) {
            return (<Redirect to="/"/>)
        }
        return (
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-6 login__right-sidebar">
                    <div className="row justify-content-center">
                    <div className="col-8"><img className="login__logo mt-4 mb-2" src="https://www.codeschool.com/assets/meta/og-logo-c95fcf45b709b6f818fa95abff33fe2df595837a399c13b8516e7a486e9746eb.png" alt="msp logo"/>
                        <div className="card card--no-outline card--shadow mb-3 px-4">
                        <div className="card-body">
                            <h1 className="login__title--green mb-4">Login to MSP</h1>
                            <hr/>
                            <div className="form-group">
                            <label htmlFor="username-email">Username / Email Address</label>
                            <input className="form-control" id="username-email" type="text" name="username" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group mb-4">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password" onChange={this.handleChange}/>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-end">
                            <button className="btn btn-info btn--shadowed" type="button" onClick={() => { onLogin(username, password)}}> <i className="fa fa-user btn__icon"></i>Login</button>
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
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);