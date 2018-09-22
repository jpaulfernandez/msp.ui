import React from 'react';

export class Card extends React.Component {

    render() {
        return (<div className={`card ${this.props.extraClass}`}>
            {this.props.children}
        </div>)
    }
}