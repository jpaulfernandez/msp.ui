import React from "react";
import {Breadcrumb} from '../../components/breadcrumb';
import {PageContentWrapper, ContainerFluid } from '../../components/wrapper';
import {Card, CardHeader, CardBody} from '../../components/card';
import { Footer}  from '../../components/footer';
import {TextButton, SolidButton, HollowButton} from '../../components/button';
import { PictureSelect } from '../../components/picture-select';
import {ProducTitle, ProductSubTitle} from '../../components/header';
import {Textbox, Select, TextboxGroup} from '../../components/form';
import { connect } from "react-redux";
import {requestUser, handleStateChange, saveUser} from "../../actions/user";
import {Redirect} from "react-router-dom";
import swal from 'sweetalert2';

const mapStateToProps = (state) => {
  let { user } = state;
  return {
      user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      queryUser: (userId) => dispatch(requestUser(userId)),
      onModelChange: (id, value) => dispatch(handleStateChange(id,value)),
      onUserSubmit: (user) => dispatch(saveUser(user))
  }
}

class User extends React.Component {
    constructor() {
      super();

      this.state = {
        redirect: false
      }
    }
    componentDidMount() {
      let query = this.props.location.search.replace('?','').split('=');
      if(query[0]==='id') {
        this.props.queryUser(query[1]);
      }
    }
    
    componentDidUpdate() {
      if(this.props.user.success) {
        swal({
          type: 'success',
          title: 'Success',
          text: 'User successfully saved!'
        });
      } else if(this.props.user.success === false) {
        swal({
          type: 'error',
          title: 'Error',
          text: 'User not saved!'
        });
      }
    }

    renderRedirect() {
      if(this.state.redirect)
        return (<Redirect to='/branch'/>)
    }

    render() {
      let {onModelChange, onUserSubmit, user} = this.props;
      let fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
        return (<PageContentWrapper>
          {this.renderRedirect()}
        <ContainerFluid>
          <Breadcrumb match={this.props.match}></Breadcrumb>
          <Card extraClass="card--no-outline mb-5">
            <CardHeader 
              title={fullName === '  ' ? 'Add New User':fullName} 
              buttonTitle="Save User" 
              action={()=>{ onUserSubmit(user)}}
              actionDisabled={(user.password===''||user.password!==user.password2)}/>
            <CardBody extraClass="pr-5">
              <div className="row">
                <PictureSelect 
                  onChange={onModelChange}
                  idName="profilePicture"
                  value={user.profilePicture}
                  />
                <div className="col-9">
                  <ProductSubTitle>User Information</ProductSubTitle>
                  <div className="row mb-5">
                    <div className="col-4">
                      <Textbox
                        labelName="First Name"
                        idName="firstName"
                        onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                        value={user.firstName}
                      />
                    </div>
                    <div className="col-4">
                      <Textbox
                          labelName="Middle Name"
                          idName="middleName"
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                          value={user.middleName}
                        />
                    </div>
                    <div className="col-4">
                      <Textbox
                          labelName="Last Name"
                          idName="lastName"
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                          value={user.lastName}
                        />
                    </div>
                    <div className="col-6">
                      <Select
                        labelName="Role"
                        idName="role"
                        options={[' ','Admin', 'Cashier', 'Collector']}
                        onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                        value={user.role}
                      />
                    </div>
                    <div className="col-6">
                      <TextboxGroup 
                        labelName="Employee ID"
                        idName="employeeId"
                        type="text"
                        groupName="MSP"
                        onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                        value={user.employeeId}
                      />
                    </div>
                    <div className="col-6">
                      <Textbox 
                        labelName="Birthday"
                        idName="birthday"
                        type="datetime"
                        placeHolder="mm/dd/yyyy"
                        onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                        value={user.birthday}
                      />
                    </div>
                    <div className="col-6">
                      <Select
                          labelName="Civil Status"
                          idName="civilStatus"
                          options={[' ','Single', 'Married']}
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                          value={user.civilStatus}
                        />
                    </div>
                    <div className="col-6">
                        <Textbox
                          labelName="Contact No"
                          idName="contactNo"
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                          value={user.contactNo}
                        />
                    </div>
                    <div className="col-6">
                    <Textbox
                          labelName="Email"
                          idName="email"
                          type="email"
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                          value={user.email}
                        />
                    </div>
                  </div>
                  <ProductSubTitle>Password</ProductSubTitle>
                  <div className="row">
                    <div className="col-6">
                        <Textbox
                          labelName="Password"
                          idName="password"
                          type="password"
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                        />
                    </div>
                    <div className="col-6">
                        <Textbox
                          labelName="Confirm Password"
                          idName="password2"
                          type="password"
                          onChange={(e)=>{onModelChange(e.target.id, e.target.value)}}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <hr/>
            <CardBody>
              <div className="d-flex justify-content-end">
                <TextButton onClick={() => { this.setState({redirect:true})}}>Cancel</TextButton>
                <SolidButton onClick={() => { onUserSubmit(user) }} disabled={(user.password===''||user.password!==user.password2)}><i className="fa fa-floppy-o btn__icon"></i>Save User</SolidButton>
              </div>
            </CardBody>
          </Card>
        </ContainerFluid>
        <Footer></Footer>
      </PageContentWrapper>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);