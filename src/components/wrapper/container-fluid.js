import React from 'react';

export class ContainerFluid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<div className="container-fluid">
            {this.props.children}
        </div>)
    }
}