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
import '../../constants/dropdown.css';
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
            <div className="aaa">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Link
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link
                            </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Link Right
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link Right
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
    </div>
            );
    }
}
