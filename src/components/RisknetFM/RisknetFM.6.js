import 'babel-polyfill';
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

    state = {
        products: [
            {
                id: 1,
                name: 'TV',
                'price': 1000
            },
            {
                id: 2,
                name: 'Mobile',
                'price': 500
            },
            {
                id: 3,
                name: 'Book',
                'price': 20
            },
        ],
        columns: [{
            dataField: 'id',
            text: 'Product ID'
        },
            {
                dataField: 'name',
                text: 'Product Name'
            }, {
                dataField: 'price',
                text: 'Product Price',
                sort: true
            }]
    }

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">NavBar</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://github.com/fontenele/bootstrap-navbar-dropdowns" target="_blank">GitHub
                                Project</a></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu 1 <b
                                    className="caret"></b></a>
                                <ul className="dropdown-menu multi-level">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li className="dropdown-submenu">
                                                <a href="#" className="dropdown-toggle"
                                                   data-toggle="dropdown">Dropdown</a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-submenu">
                                                        <a href="#" className="dropdown-toggle"
                                                           data-toggle="dropdown">Dropdown</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Action</a></li>
                                                            <li><a href="#">Another action</a></li>
                                                            <li><a href="#">Something else here</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#">Separated link</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#">One more separated link</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu 2 <b
                                    className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                            <li className="divider"></li>
                                            <li className="dropdown-submenu">
                                                <a href="#" className="dropdown-toggle"
                                                   data-toggle="dropdown">Dropdown</a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-submenu">
                                                        <a href="#" className="dropdown-toggle"
                                                           data-toggle="dropdown">Dropdown</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Action</a></li>
                                                            <li><a href="#">Another action</a></li>
                                                            <li><a href="#">Something else here</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#">Separated link</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#">One more separated link</a></li>
                                                        </ul>
                                                    </li>
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
}
