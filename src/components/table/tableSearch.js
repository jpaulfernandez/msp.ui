import React from 'react';

export class TableSearch extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <button className="btn btn-outline-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="btn__text">Filter by <strong>ALL</strong></span></button>
                    <div className="dropdown-menu"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" role="separator"></div><a className="dropdown-item" href="#">Separated link</a>
                    </div>
                    </div>
                    <input className="form-control form-control--no-right-border" type="text"/>
                    <div className="input-group-append">
                    <div className="input-group-text input-group-text--transparent-append"><i className="fa fa-search"></i></div>
                    </div>
                </div>
                </div>
          </div>
        )
    }
}