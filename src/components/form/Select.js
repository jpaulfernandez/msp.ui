import React from "react";

export class Select extends React.Component {
    render() {
        let {labelName, options, idName, onChange} = this.props;
        return(
            <div>
                <label htmlFor={idName}>{labelName}</label>
                <select className="custom-select" id={idName} onChange={onChange}>
                    {
                        options.map((i,k) => {
                            return (<option key={k} value={options[k]}>{options[k]}</option>)
                        })
                    }
                </select>
            </div>
       );
    }
}