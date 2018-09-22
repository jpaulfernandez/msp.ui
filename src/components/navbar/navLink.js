import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavLink extends React.Component {
   
    render() {
        const  isActive = this.context.router.route.location.pathname.replace('/','').indexOf(this.props.to.replace('/','')) !== -1;
        const activeClass = isActive ? 'active' : '';

        return(<li className={"nav-item mx-2 " + activeClass}>
            <Link className="nav-link" to={this.props.to}>{this.props.children}</Link>
        </li>)
    }

    
}

NavLink.contextTypes = {
    router: PropTypes.object
}

export default NavLink;