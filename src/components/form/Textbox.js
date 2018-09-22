import React from "react";

export class Textbox extends React.Component {
    render() {
        let {labelName, idName, type, onChange, placeHolder, value} = this.props;
        if (type==='' || type=== undefined) {
            type = 'text';
        }
        return(
            <div className="form-group">
                <label htmlFor={idName}>{labelName}</label>
                <input className="form-control" id={idName} type={type} onChange={onChange} placeholder={placeHolder} value={value}/>
            </div>
        );
    }
}