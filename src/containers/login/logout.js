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
        onLogout: () => dispatch(loggedout())
    }
}

class Login extends React.Component
{
    render() {
        return (
            <div>
                <Redirect to='/login'/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);