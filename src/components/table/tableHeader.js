import React from "react";
import { SolidButton } from "../button";

export class TableHeader extends React.Component {

    render() {
        return(
        <div className="row mb-3">
            <div className="col-9">
                <h1 className="customer-page__title">{this.props.title}</h1>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
                <SolidButton onClick={this.props.onClick}>{this.props.children}</SolidButton>
            </div>
        </div>)
    }
}