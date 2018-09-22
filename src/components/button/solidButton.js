import React from "react";

export class SolidButton extends React.Component {
    render() {
        return (<button className="btn btn-info btn--shadowed" type="button" onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.children}
                </button>)
    }
}