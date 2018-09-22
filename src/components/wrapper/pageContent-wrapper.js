import React from 'react';

export class PageContentWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<div id="page-content-wrapper">
            {this.props.children}
        </div>)
    }
}