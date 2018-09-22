import React from 'react';

export class CardBody extends React.Component {

    render() {
        return (<div className={`card-body ${this.props.extraClass}`}>
            {this.props.children}
        </div>)
    }
}