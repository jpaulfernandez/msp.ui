import React from "react";

export class TextArea extends React.Component {
    render() {
        let {labelName, idName, type, onChange, placeHolder, value, row} = this.props;
        if (type==='' || type=== undefined) {
            type = 'text';
        }
        return(
            <div className="form-group">
                <label htmlFor={idName}>{labelName}</label>
                <textarea className="form-control" id={idName} type={type} onChange={onChange} placeholder={placeHolder} value={value} row={row}></textarea>
            </div>
        );
    }
}