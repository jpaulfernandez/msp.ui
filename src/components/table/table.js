import React from "react";
import {TableSearch} from './tableSearch'

export class Table extends React.Component {
    render() {
        return(
            <div>
                <TableSearch />
                <p>{this.props.title}</p>
                <table className="table table-striped table-sm table-responsive-md">
                    <thead>
                        <tr>
                            <th className="th--no-border" scope="col"></th>
                            {
                                this.props.headers.map((k,i) => {
                                    return (
                                        <th key={i} className="th__text th--no-border" scope="col">{this.props.headers[i]}</th>
                                    )
                                })
                            }
                            <th className="th__text th--no-border text-center" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="row--pad">
                        <th className="th--small" scope="row"><img className="th__image" src="https://randomuser.me/api/portraits/men/71.jpg"/></th>
                        <td>Gonzales</td>
                        <td>Floyd</td>
                        <td>fgonzales@yahoo.com</td>
                        <td>123456</td>
                        <td className="td--small text-center">
                        <button className="btn btn-link btn-sm btn--no-decoration btn__text--capitalize" type="button">View</button>
                        </td>
                    </tr>
                    <tr>
                        <th className="th--small" scope="row"><img className="th__image" src="https://randomuser.me/api/portraits/men/85.jpg"/></th>
                        <td>Hunt</td>
                        <td>Jason</td>
                        <td>jhunt@gmail.com</td>
                        <td>123457</td>
                        <td className="td--small text-center">
                        <button className="btn btn-link btn-sm btn--no-decoration btn__text--capitalize" type="button">View</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}