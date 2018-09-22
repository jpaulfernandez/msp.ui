import React from "react";

export default class PageWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="toggled" id="wrapper">
            {this.props.children}
        </div>
        );
    }
}