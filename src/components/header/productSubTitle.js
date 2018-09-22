import React from "react";

export class ProductSubTitle extends React.Component {
    render() {
        return(<p className="product-card__subtitle">{this.props.children}</p>);
    }
}