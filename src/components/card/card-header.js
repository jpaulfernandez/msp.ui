import React from 'react';
import { ProductTitle } from '../header';
import { SolidButton } from '../button';

export class CardHeader extends React.Component {
    render() {
        return(
        <div className={`card-body card-body__header ${this.props.extraClass}`}>
            <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
                <div className="row">
                <ProductTitle>{this.props.title}</ProductTitle>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <SolidButton onClick={this.props.action} disabled={this.props.actionDisabled}>{this.props.buttonTitle}</SolidButton>
                </div>
                </div>
            </div>
            </div>
        </div>
      );
    }
}