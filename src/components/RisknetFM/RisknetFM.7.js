import 'babel-polyfill';
//import htmlContent from './index.html';
import React, { Component, Fragment} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../LoaderButton";
import * as RoutesPath from '../../constants/routes';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

import { BrowserRouter as Router} from "react-router-dom";
import {Link, Route, withRouter, Switch} from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {Dropdown, SplitButton, title} from 'react-bootstrap';
//import './RisknetFM.css';
//import './dropdown.css';
//import './app.css';
//import './navbar.css';
//import './topnav.css';
//import '../../index.css';
//import './risknet.css'
import '../../constants/dropdown-submenu.css'
const reload = () => window.location.reload();
export default class RisknetFMPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    validateForm() {
//        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
    }

    isValidUserPassword() {
//        return (this.state.username === 'aaa' && this.state.password === 'aaa');
    }

    handleSubmit = async event => {
        event.preventDefault();


        try {

        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-md navbar-dark bg-dark mb-4" role="navigation">
                    <a className="navbar-brand" href="#">Bootstrap 4 NavBar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://fontenele.github.io/bootstrap-navbar-dropdowns/"
                                   target="_blank">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Dropdown1</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown1">
                                    <li className="dropdown-item" href="#"><a>Action 1</a></li>
                                    <li className="dropdown-item dropdown">
                                        <a className="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">Dropdown1.1</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown1-1">
                                            <li className="dropdown-item" href="#"><a>Action 1.1</a></li>
                                            <li className="dropdown-item dropdown">
                                                <a className="dropdown-toggle" id="dropdown1-1-1" data-toggle="dropdown"
                                                   aria-haspopup="true" aria-expanded="false">Dropdown1.1.1</a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdown1-1-1">
                                                    <li className="dropdown-item" href="#"><a>Action 1.1.1</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Dropdown2</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown2">
                                    <li className="dropdown-item" href="#"><a>Action 2 A</a></li>
                                    <li className="dropdown-item" href="#"><a>Action 2 B</a></li>
                                    <li className="dropdown-item" href="#"><a>Action 2 C</a></li>
                                    <li className="dropdown-item dropdown">
                                        <a className="dropdown-toggle" id="dropdown2-1" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">Dropdown2.1</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown2-1">
                                            <li className="dropdown-item" href="#"><a>Action 2.1 A</a></li>
                                            <li className="dropdown-item" href="#"><a>Action 2.1 B</a></li>
                                            <li className="dropdown-item" href="#"><a>Action 2.1 C</a></li>
                                            <li className="dropdown-item dropdown">
                                                <a className="dropdown-toggle" id="dropdown2-1-1" data-toggle="dropdown"
                                                   aria-haspopup="true" aria-expanded="false">Dropdown2.1.1</a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdown2-1-1">
                                                    <li className="dropdown-item" href="#"><a>Action 2.1.1 A</a></li>
                                                    <li className="dropdown-item" href="#"><a>Action 2.1.1 B</a></li>
                                                    <li className="dropdown-item" href="#"><a>Action 2.1.1 C</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-item dropdown">
                                                <a className="dropdown-toggle" id="dropdown2-1-2" data-toggle="dropdown"
                                                   aria-haspopup="true" aria-expanded="false">Dropdown2.1.2</a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdown2-1-2">
                                                    <li className="dropdown-item" href="#"><a>Action 2.1.2 A</a></li>
                                                    <li className="dropdown-item" href="#"><a>Action 2.1.2 B</a></li>
                                                    <li className="dropdown-item" href="#"><a>Action 2.1.2 C</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    /*
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="index1.html" onEnter={reload} />
                    </Switch>
                </Router>
            </div>
        );
    }


    render() {
        return (
            <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
        );
  }  */

}
