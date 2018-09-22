import React from "react";
import {Breadcrumb} from '../../components/breadcrumb';
import {PageContentWrapper, ContainerFluid } from '../../components/wrapper';
import {Card, CardHeader, CardBody} from '../../components/card';
import { Footer}  from '../../components/footer';
import { connect } from "react-redux";
import {requestUser, handleStateChange, saveUser} from "../../actions/user";
import {Redirect} from "react-router-dom";
import swal from 'sweetalert2';
import {TableHeader, Table} from '../../components/table'

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
        return (<Redirect to='/branch/user'/>)
    }

    render() {
        let {match} = this.props;
        return(
        <PageContentWrapper>
            <ContainerFluid>
                {this.renderRedirect()}
                <Breadcrumb match={match}/>
                <TableHeader title="Branch Management" onClick={()=>{this.setState({redirect:true})}}>
                    <i class="fa fa-user-plus btn__icon"></i>Add New User
                </TableHeader>
                <Card extraClass="card--no-outline card--shadow mb-5">
                    <CardBody extraClass="p4">
                    <Table
                        title="All System Users"
                        headers={['LAST NAMES', 'FIRST NAMES', 'EMAIL', 'EMPLOYEE ID']}
                    />
                    </CardBody>
                </Card>
                <Footer />
            </ContainerFluid>
        </PageContentWrapper>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);