// App.js
import 'babel-polyfill';
import BootstrapTable from 'react-bootstrap-table-next';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {Link, Route, withRouter, Switch} from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
import * as RoutesPath from './constants/routes';
import "./App.css";
import MyRoutes from "../bak_src3/navigator/MyRoutes";

class App extends Component {

  handleLogout = async event => {
    this.props.history.push("/login");
//        this.props.history.push("{routeConstants.LOG_IN}");
  }

/*
  render() {
    return (
        <div className="App container">
          <Router>
          <Switch>
              <Route exact path={RoutesPath.ROOT} component={LogInPage} />
              <Route exact path={RoutesPath.LOG_IN} component={LogInPage}/>
              <Route exact path={RoutesPath.HOME} component={HomePage} />
              <Route exact path={RoutesPath.RISKNETFM} component={RisknetFMPage} />
            <Route  component={NotFoundPage}/>
          </Switch>
          </Router>
        </div>
    );
  }
*/

    render() {
        return (
            <div className="App container">
                <Router>
                    <Switch>
                        <Route exact path={RoutesPath.ROOT} component={LogInPage}/>
                        <Route exact path={RoutesPath.LOG_IN} component={LogInPage}/>
                        <Route exact path={RoutesPath.HOME} component={HomePage}/>
                        <Route exact path={RoutesPath.RISKNETFM} component={RisknetFMPage}/>
                        { /* Finally, catch all unmatched routes */}
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Router>
            </div>
        )
    };
}

export default withRouter(App);
