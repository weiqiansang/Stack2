// App.js
import 'babel-polyfill';
import BootstrapTable from 'react-bootstrap-table-next';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {Link, Route, withRouter, Switch} from "react-router-dom";
//import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";

import { Auth } from "aws-amplify";

//import Navigation from '../Navigation';
import HomePage from './components/Home';
import LogInPage from './components/Login';
import SignUpPage from './components/SignUp';
//import PasswordForgetPage from '../PasswordForget';
//import AccountPage from '../Account';
//import AdminPage from '../Admin';
import NotFoundPage from './components/NotFound';
import RisknetFMPage from './components/RisknetFM/RisknetFM';
import ManageIRLPage from './components/RisknetFM/Admin/ManageIRL/ManageIRL';
import IRLViewDetailsPage from './components/RisknetFM/Admin/ManageIRL/IRLViewDetails';
import IRLUploadDocumentPage from './components/RisknetFM/Admin/ManageIRL/IRLUploadDocument';
import MyTestPage from './constants/mytest/mytest';
import * as RoutesPath from './constants/routes';
import ReactDOM from 'react-dom';
import "./App.css";

class App extends Component {

  handleLogout = async event => {
    this.props.history.push("/login");
//        this.props.history.push("{routeConstants.LOG_IN}");
  }

    render() {
        return (
            <div>

            <div className="App container">
                <Router>
                    <Switch>
                        <Route exact path={RoutesPath.ROOT} component={LogInPage}/>
                        <Route exact path={RoutesPath.LOG_IN} component={LogInPage}/>
                        <Route exact path={RoutesPath.HOME} component={RisknetFMPage}/>
                        <Route exact path={RoutesPath.RISKNETFM} component={RisknetFMPage}/>
                        <Route exact path={RoutesPath.MANAGEIRL} component={ManageIRLPage}/>
                        <Route exact path={RoutesPath.IRLVIEWDETAILS} component={IRLViewDetailsPage}/>
                        <Route exact path={RoutesPath.IRLUPLOADDOCUMENT} component={IRLUploadDocumentPage}/>
                        <Route exact path={RoutesPath.MYTEST} component={MyTestPage}/>
                        { /* Finally, catch all unmatched routes */}
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Router>
            </div>
            </div>
        )
    };
}

export default withRouter(App);
