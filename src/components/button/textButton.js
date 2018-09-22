import React from "react";

export class TextButton extends React.Component {
    render() {
        return (
            <button className="btn btn--transparent mr-4" type="button" onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.children}</button>
        )
    }
}
