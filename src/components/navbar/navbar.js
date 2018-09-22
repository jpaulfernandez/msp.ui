import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './navLink';

export default class Navbar extends React.Component {

    render() {
        return(<nav className="navbar navbar-light navbar-expand-lg fixed-top"><Link className="navbar-brand" to="/"><img src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" width="50" height="50" alt=""/></Link>
            <div className="collapse navbar-collapse ml-5" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink to="/dashboard"><strong>Home <br/></strong><span>Dashboard</span></NavLink>
                    <NavLink to="/branch"><strong>Branch <br/></strong><span>Management</span></NavLink>
                    <NavLink to="/customer"><strong>Customer <br/></strong><span>Management</span></NavLink>
                    <NavLink to="/product"><strong>Product <br/></strong><span>Management</span></NavLink>
                    <NavLink to="/transaction"><strong>Transaction <br/></strong><span>Management</span></NavLink>
                </ul>
            </div>
            <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" onClick={() => {window.location.href='/login'}}> <strong>Log out</strong></a></li>
            </ul>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        </nav>);
    }
}