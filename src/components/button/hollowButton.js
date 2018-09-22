import React from "react";

export class HollowButton extends React.Component {
    render() {
        return (<button className="btn btn-outline-info btn--shadowed" type="button" onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.children}</button>)
    }
}