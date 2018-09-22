import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/home';
import Branch from '../branch/branch';
import Customer from '../customer/customer';
import Product from '../product/product';
import Transaction from '../transaction/transaction';

export default class Main extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Switch>
                <Route exact path="/" render={()=> (this.checkAuth()? (<Redirect to='/dashboard' />):(<Redirect to='/login'/>))} />
                <Route exact path='/login' component={Login}/>
                <Route path='/dashboard' render={({match}) => (this.checkAuth() ? (<Home match={match}></Home>):(<Login></Login>))} />            
                <Route path='/branch' render={({match}) => (this.checkAuth() ? (<Branch match={match}></Branch>):(<Login></Login>))} />
                <Route path='/customer' render={({match}) => (this.checkAuth() ? (<Customer match={match}></Customer>):(<Login></Login>))} />
                <Route path='/product' render={({match}) => (this.checkAuth() ? (<Product match={match}></Product>):(<Login></Login>))} />
                <Route path='/transaction' render={({match}) => (this.checkAuth() ? (<Transaction match={match}></Transaction>):(<Login></Login>))} />
            </Switch>
        );
    }

    checkAuth(nextState, replace, next) {
       let user = localStorage.getItem("token");
       if (!user) {
           return false;
       }
       return true;
    }
}
