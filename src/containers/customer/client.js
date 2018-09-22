import React from "react";
import {connect} from "react-redux";
import {PictureSelect} from '../../components/picture-select';
import {Card, CardHeader, CardBody } from '../../components/card';
import {Footer} from '../../components/footer';
import {Textbox, TextArea, Select, FileSelect} from '../../components/form';
import {PageContentWrapper, ContainerFluid} from '../../components/wrapper';
import {Breadcrumb} from '../../components/breadcrumb';
import {ProductSubTitle} from '../../components/header';
import {TextButton, SolidButton} from '../../components/button';


const mapStateToProp = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

class Client extends React.Component {
    render() {
        return(
            <PageContentWrapper>
                <ContainerFluid>
                    <Breadcrumb match={this.props.match}/>
                    <Card extraClass="card--no-outline mb-5">
                        <CardHeader 
                            title="Add New Client" 
                            buttonTitle="Save Client" 
                            action={()=>{ alert('saved!')}}
                        />
                        <CardBody extraClass="pr-5">
                        <div className="row">
                            <PictureSelect 
                            // onChange={onModelChange}
                            idName="profilePicture"
                            // value={user.profilePicture}
                            />
                            <div className="col-9">
                                <ProductSubTitle>Client Information</ProductSubTitle>
                                <div className="row mb-5">
                                        <div className="col-4">
                                            <Textbox
                                                labelName="First Name"
                                                idName="firstName"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.firstName}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <Textbox
                                                labelName="Middle Name"
                                                idName="middleName"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.middleName}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <Textbox
                                                labelName="Last Name"
                                                idName="lastName"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <Textbox
                                                labelName="Address Line 1"
                                                idName="addressLine1"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <Textbox
                                                labelName="Address Line 2"
                                                idName="addressLine2"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Textbox
                                                labelName="City/Municipality"
                                                idName="city"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Textbox
                                                labelName="Province"
                                                idName="province"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Textbox
                                                labelName="Birthday"
                                                idName="birthday"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Select
                                                labelName="Civil Status"
                                                idName="civilStatus"
                                                options={[' ','Single', 'Married']}
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                    </div>
                                    <ProductSubTitle>Spouse Information</ProductSubTitle>
                                    <div className="row">
                                        <div className="col-4">
                                            <Textbox
                                                labelName="First Name"
                                                idName="spouse.firstName"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <Textbox
                                                labelName="Middle Name"
                                                idName="spouse.middleName"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <Textbox
                                                labelName="Last Name"
                                                idName="spouse.lastName"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                    </div>
                                    <ProductSubTitle>Business Information</ProductSubTitle>
                                    <div className="row">
                                        <div className="col-6">
                                            <Textbox
                                                labelName="Business Name"
                                                idName="business.name"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Textbox
                                                labelName="Business Industry"
                                                idName="business.industry"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <Textbox
                                                labelName="Business Address"
                                                idName="business.businessAddress"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Textbox
                                                labelName="City/Municipality"
                                                idName="business.city"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Textbox
                                                labelName="Province"
                                                idName="business.province"
                                                // onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                                                // value={user.lastName}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb5">
                                        <div className="col-6">
                                            <ProductSubTitle>DIGITAL DOCUMENTS</ProductSubTitle>
                                            <FileSelect 
                                                labelName="Upload File"
                                                idName="document"
                                                supportedFormat="JPEG, GIF, PNG, PDF"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <ProductSubTitle>DIGITAL SIGNATURE</ProductSubTitle>
                                            <FileSelect 
                                                labelName="Upload Signature"
                                                idName="signature"
                                                supportedFormat="JPEG, GIF, PNG, PDF"
                                            />
                                        </div>
                                    </div>

                                    <ProductSubTitle>OTHERS</ProductSubTitle>
                                    <div className="row mb5">
                                        <div className="col-12">
                                            <TextArea 
                                                labelName="Notes"
                                                idName="notes"
                                            />
                                        </div>
                                    </div>
                                    <hr/>
                                    <CardBody>
                                    <div className="d-flex justify-content-end">
                                        <TextButton onClick={() => {}}>Cancel</TextButton>
                                        <SolidButton onClick={() => { alert('saved'); }}><i className="fa fa-floppy-o btn__icon"></i>Save User</SolidButton>
                                    </div>
                                    </CardBody>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </ContainerFluid>
                <Footer></Footer>
            </PageContentWrapper>
        )
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Client);

