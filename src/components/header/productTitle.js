import React from "react";

export class ProductTitle extends React.Component {
    render() {
        return(<div className="col-8">
            <h1 className="product-card__title">{this.props.children}</h1>
        </div>)
    }
}