import React from "react";

export class FileSelect extends React.Component {
    render() {
        let {labelName, idName, type, onChange, value, supportedFormat} = this.props;
        if (type==='' || type=== undefined) {
            type = 'text';
        }
        return(
            <div>
                <label>{labelName}</label>
                <div className="input-group">
                    <div className="custom-file">
                      <input className="custom-file-input" id={idName} type="file" onChange={()=>{onChange}}/>
                      <label className="custom-file-label" htmlFor={idName}></label>
                    </div>
                </div>
                <small>Supported formats : {supportedFormat}</small>
            </div>
        );
    }
}