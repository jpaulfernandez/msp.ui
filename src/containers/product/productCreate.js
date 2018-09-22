import React from "react";
import {Breadcrumb} from '../../components/breadcrumb';
import {PageContentWrapper, ContainerFluid } from '../../components/wrapper';
import {Card, CardHeader, CardBody} from '../../components/card';
import { Footer}  from '../../components/footer';
import {TextButton, SolidButton, HollowButton} from '../../components/button';
import { PictureSelect } from '../../components/picture-select';
import {ProducTitle, ProductSubTitle} from '../../components/header';
import {Textbox, Select, TextboxGroup, TextArea} from '../../components/form';
import { connect } from "react-redux";
import {requestUser, handleStateChange, saveUser} from "../../actions/user";
import {Redirect} from "react-router-dom";
import swal from 'sweetalert2';

const mapStateToProps = (state) => {
  return {
      
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    onModelChange: (id, value) => dispatch(handleStateChange(id,value)),
  }
}

class ProductCreate extends React.Component {
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
      
    }

    renderRedirect() {
      if(this.state.redirect)
        return (<Redirect to='/product'/>)
    }

    render() {
        let {onModelChange} = this.props;
        return (<PageContentWrapper>
          {this.renderRedirect()}
        <ContainerFluid>
          <Breadcrumb match={this.props.match}></Breadcrumb>
          <Card extraClass="card--no-outline mb-5">
            <CardHeader 
              title='Add New Product'
              buttonTitle="Save Product" />
            <CardBody extraClass="pr-5">
              <div className="row">
                <PictureSelect 
                  onChange={onModelChange}
                  idName="profilePicture"
                  />
                <div className="col-9">
                  <ProductSubTitle>Product Information</ProductSubTitle>
                  <div className="row mb-5">
                    <div className="col-6">
                        <Textbox 
                            labelName="Product Name"
                            idName="productName"
                        />
                    </div>
                    <div className="clear-fix"></div>
                    <div className="col-12">
                        <TextArea 
                            labelName="Product Description"
                            idName="productDescription"
                        />
                    </div>
                    <div className="col-6">
                        <Select 
                            labelName="Term in days"
                            idName="terms"
                            options={["88"]}
                        />
                    </div>
                  </div>
                  <ProductSubTitle>Rates</ProductSubTitle>                    
                  <div className="row mb-5">
                    <div className="col-6">
                        <Textbox 
                            labelName="Savings "
                            idName="savings"
                        />
                    </div>
                    <div className="col-6">
                        <Textbox 
                            labelName="Interest"
                            idName="interest"
                        />
                    </div>
                    <div className="col-6">
                        <Textbox 
                            labelName="Service Charge"
                            idName="serviceCharge"
                        />
                    </div>
                  </div>
                  <ProductSubTitle>Other Expense</ProductSubTitle>                    
                  <div className="row mb-5">
                    <div className="col-6">
                        <Textbox 
                            labelName="Documentary Stamp"
                            idName="docStamp"
                        />
                    </div>
                    <div className="col-6">
                        <Textbox 
                            labelName="MRI"
                            idName="mri"
                        />
                    </div>
                    <div className="col-6">
                        <Textbox 
                            labelName="Other Expense"
                            idName="otherExpense"
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
                <SolidButton><i className="fa fa-floppy-o btn__icon"></i>Save Product</SolidButton>
              </div>
            </CardBody>
          </Card>
        </ContainerFluid>
        <Footer></Footer>
      </PageContentWrapper>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);