// App.js
import 'babel-polyfill';
import BootstrapTable from 'react-bootstrap-table-next';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from "react";
import {Link, Route, Router, withRouter, Switch} from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routers from "./Routers";

import { Auth } from "aws-amplify";

import Login from "./components/Login/Login";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      isMenu: false,
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
      this.setState({isMenu: true });
    }
    catch(e) {
      if (e !== 'No current user') {
//                alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.setState({isMenu: false });
    this.props.history.push("/login");
//        this.props.history.push("{routeConstants.LOG_IN}");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
        !this.state.isAuthenticating &&
        <div className="App container">
          <Router>
          <div>
            <Route exact path="/Login" component={Login} />
          </div>
          </Router>
          <Routers childProps={childProps} />
        </div>
    );
  }
}

export default withRouter(App);
