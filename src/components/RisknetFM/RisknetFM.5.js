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


        try {

        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="dropdown-submenu">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Risknet</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullLeft>
                        <LinkContainer to="/file">
                            <NavItem>File</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/view">
                            <NavItem>View</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/GoTo">
                            <NavItem>GoTo</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/Search">
                            <NavItem>Search</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={5} title="Admin" id="Admin-dropdown">
                            <MenuItem eventKey={5.1}>Add Counterparty</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.2}>Add orphaned Alias</MenuItem>
                            <MenuItem eventKey={5.3}>AddParent</MenuItem>
                            <MenuItem eventKey={5.4}>Change Counterparty Data</MenuItem>
                            <MenuItem eventKey={5.5}>corporate Structure Change Log</MenuItem>
                            <MenuItem eventKey={5.6}>Cross Ref Maintenance</MenuItem>
                            <MenuItem eventKey={5.7}>Delete Counterparty</MenuItem>
                            <MenuItem eventKey={5.8}>Delete Orphaned Alias</MenuItem>
                            <MenuItem eventKey={5.9}>Manage Admin Ratios</MenuItem>
                            <MenuItem eventKey={5.10}>Manage Email Recipients</MenuItem>
                            <MenuItem eventKey={5.11}>Manage Financial Items</MenuItem>
                            <MenuItem eventKey={5.12}>Merge Counterparties</MenuItem>
                            <MenuItem eventKey={5.13}>Process Control Management</MenuItem>
                            <MenuItem eventKey={5.14}>Remove Parent/Modify Ownership</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.15}>Admin Reports</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.16}>Capital Markets Maintenance</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.17}>Collateral Management</MenuItem>
                            <MenuItem eventKey={5.18}>IR Maintenance</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.19}>Counterparty Contact Information</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.20}>HCD Maintenance</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.21}>Lender Performance</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.21}>Manage IR/Limits</MenuItem>
                            <LinkContainer to='/admin/manageIRL'><MenuItem onClick={ this.onNavItemClick } eventKey={5.22 }>Manage IR/Limits</MenuItem></LinkContainer>
                            <MenuItem divider />
                            <MenuItem eventKey={5.23}>Other Transaction Maintenance</MenuItem>
                        </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem onClick={this.handleLogout}>Logout</NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    </div>
            );
    }
}
