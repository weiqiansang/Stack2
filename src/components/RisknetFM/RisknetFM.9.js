import 'babel-polyfill';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

import '../../../../constants/mult-level-menu.css'
import * as UsersConstant from '../../../../constants/users.js'


export default class RisknetFMPage extends Component {

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
            <div className={"mainmenu"}>
            <div className={"topnav"}>
            <Navbar>
                <Nav>
                    <NavItem eventKey={1} href="#">File</NavItem>
                    <NavItem eventKey={2} href="#">View</NavItem>
                    <NavItem eventKey={2} href="#">GoTo</NavItem>
                    <NavItem eventKey={2} href="#">Search</NavItem>
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
                        <LinkContainer to='/admin/manageIRL'><MenuItem onClick={ this.onNavItemClick } eventKey={5.22 }>Manage IR/Limits</MenuItem></LinkContainer>
                        <MenuItem divider />
                        <MenuItem eventKey={5.23}>Other Transaction Maintenance</MenuItem>
                    </NavDropdown>
                    <LinkContainer to='/login'><MenuItem onClick={ this.onNavItemClick } eventKey={6 }>Logout</MenuItem></LinkContainer>
                </Nav>
            </Navbar>
            </div>
        </div>
        )
    }
}
/*
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title, i) {
    return (
        <DropdownButton
            bsStyle={title.toLowerCase()}
            title={title}
            key={i}
            id={`dropdown-basic-${i}`}
        >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>
                Active Item
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
    );
}

const buttonsInstance = (
    <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
);
*/
