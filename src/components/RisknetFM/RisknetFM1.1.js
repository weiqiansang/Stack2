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
import './RisknetFM.css';

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
            <div className="topnav">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div className="dropdown">
                    <button className="dropbtn">Dropdown
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
            );
    }
}
