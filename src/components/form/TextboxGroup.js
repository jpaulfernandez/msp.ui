import React from "react";

export class TextboxGroup extends React.Component {
    render() {
        let {labelName, idName, type, groupName, onChange, value} = this.props;
        return(
            <div>
                <label htmlFor={idName}>{labelName}</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text input-group-text--transparent-light-prepend">{groupName}</span>
                    </div>
                    <input className="form-control" id={idName} type={type} onChange={onChange} value={value}/>
                </div>
            </div>
        );
    }
}