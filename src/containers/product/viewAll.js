import React from "react";
import {Breadcrumb} from '../../components/breadcrumb';
import {PageContentWrapper, ContainerFluid } from '../../components/wrapper';
import {Card, CardHeader, CardBody} from '../../components/card';
import { Footer}  from '../../components/footer';
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import swal from 'sweetalert2';
import {TableHeader, Table} from '../../components/table'
import { Select } from '../../components/form';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
}

class ViewAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect :false
        }
    }

    renderRedirect() {
      if(this.state.redirect)
        return (<Redirect to='/product/all'/>)
    }

    render() {
        let {match} = this.props;
        return(
        <PageContentWrapper>
            <ContainerFluid>
                {this.renderRedirect()}
                <Breadcrumb match={match}/>
                <TableHeader title="Product Management" onClick={()=>{this.setState({redirect:true})}}>
                    <i class="fa fa-user-plus btn__icon"></i>Add New Product
                </TableHeader>
                <Card extraClass="card--no-outline card--shadow mb-5">
                    <CardBody extraClass="p4">
                        <div class="row">
                            <div class="col-9 d-flex align-items-center justify-content-end">
                                <div class="text-right">Filter by</div>
                            </div>
                            <div class="col-3">
                                <Select 
                                    idName ="filterSelect"
                                    options = {['Product Name', 'Product Class']} 
                                />
                            </div>
                        </div>
                    </CardBody>
                    <hr className="hr--zero-pad"/>
                    <CardBody extraClass="p4">
                        <div className="row">
                            <div className="col-3 mb-3">
                                <div class="card">
                                    <div class="card-body text-center card--dark-blue-theme"><i class="fa fa-plus-circle fa-2x mt-4"></i><a class="card-body__button-title mb-4 mt-2">Add New <br/> Product</a></div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Footer />
            </ContainerFluid>
        </PageContentWrapper>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);