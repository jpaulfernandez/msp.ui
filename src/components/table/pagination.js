import React from 'react';

export class Pagination extends React.Component {
    render() {
        return(
            <nav aria-label="Pagination">
              <ul className="pagination pagination-sm justify-content-end">
                <li className="page-item disabled"><a className="page-link" href="#">&laquo; First</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">&lsaquo; Prev</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">Next &rsaquo;</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">Last &raquo;</a></li>
              </ul>
            </nav>);
    }
}