import React from "react";
import * as $ from 'jquery';


export class PictureSelect extends React.Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.customerImageHolder = $('#pic')[0];
        this.imageSelector = $(`#${this.props.idName}`)[0];
    }

    onDisplayImageChange(cb) {
        let {imageSelector, customerImageHolder} = this;
        let {idName} = this.props;
        if (imageSelector.files && imageSelector.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(customerImageHolder).attr('src',e.target.result);
                if(cb !== undefined)
                    cb(idName, e.target.result);
            }
            reader.readAsDataURL(this.imageSelector.files[0]);
        }
    }

    render() {
        let inputStyle = 
        {
            display: 'none'
        }
        let {onChange, idName, value} = this.props;
        
        return(
        <div className="col-3"><img className="mb-3 customer__image" src={value} id="pic" alt="profile picture"/>
            <div className="text-center">
                <button className="btn btn-outline-info btn--shadowed" type="button" onClick={()=>{$(`#${idName}`).click();}}> 
                <i className="fa fa-camera btn__icon"></i>Upload picture</button>
                <input id={idName} type="file" style={inputStyle} accept="image/*" onChange={(e)=>{
                    this.onDisplayImageChange(onChange);
                }}/>
            </div>
        </div>);
    }
};
//https://picsum.photos/g/200/200