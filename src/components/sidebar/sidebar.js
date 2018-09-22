import React from "react";
import { Link } from "react-router-dom";

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        let { link, title1, title2 } = this.props;
        return(
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <div className="sidebar__title" href="#">{title1} <br /> {title2}</div>
                </li>
                {
                    link.map((l, i) =>{
                        return(<li key={i}><Link className="sidebar__item" to={link[i].path}>{link[i].name}</Link></li>)
                    })
                }
            </ul>
        </div>);
    }
}