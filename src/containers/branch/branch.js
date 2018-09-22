import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import PageWrapper from "../../components/wrapper/page-wrapper";
import {connect} from "react-redux";
import { RequestRoute } from "../../actions/routeResolver";
import { Switch, Route } from "react-router-dom";
import User from "./user";
import ViewAll from "./viewAll";


const mapStateToProps = (state) => {
    let { route } = state;
    return {
        route
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestRoute: (parentName) => dispatch(RequestRoute(parentName))
    }
}

class Branch extends React.Component {

    constructor(props) {
        super(props);
        props.requestRoute("branch");
    }

    render() {
        let { route } = this.props.route;
        let match = this.props.match.path;
        return (
            <div>
                <Navbar />
                <PageWrapper>
                    <Sidebar title1={route.title} title2={route.subTitle} link={route.sub} />
                    <Switch>
                        <Route path={match + '/user'} component={User} match={match} />
                        <Route path={match} component={ViewAll} match={match} />
                    </Switch>
                </PageWrapper>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Branch);