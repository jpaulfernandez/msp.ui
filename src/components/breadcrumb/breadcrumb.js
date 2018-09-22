import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Breadcrumb extends React.Component {
    constructor(props) {
        super(props);
    }

    resolvePathName(path='') {
        switch(path) {
            case '':
                return 'Home';
            case 'branch':
                return 'Branch';
            case 'user':
                return 'Add New User';
            case 'customer':
                return 'Customer';
            case 'client':
                return 'Add New Client';
            case 'product':
                return 'Product'
            default:
                return 'Home';
        }
    }
    render() {
        let { match } = this.props;
        let paths = match.path.split('/');
        let prev = '';
        return (
        <div>    
            <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    {   
                        paths.map((p,i) => {
                            prev += paths[i] + '/';
                            let activeClass = i === paths.length-1 ? 'active' : '';
                            return(
                            <li className={`breadcrumb-item ${activeClass}`} key={i}>
                                <Link to={`${prev}`}>{this.resolvePathName(paths[i])}</Link>
                            </li>)
                        })
                    }
                    </ol>
            </nav>
            <hr/>
        </div>)
    }
}

Breadcrumb.contextTypes = {
    router: PropTypes.object
}