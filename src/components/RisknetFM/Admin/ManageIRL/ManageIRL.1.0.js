import 'babel-polyfill';
import React, { Component, Fragment } from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';

import '../../../../constants/navbar.css';

import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
//import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ManageIRLPage extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/results')
            .then(response => {
                this.setState({
                    products: response.data
                });
            });
    }

    render() {
        return (
                <div className={"navbar"}>
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
                        </Nav>
                    </Navbar>
<div>
    <div>
    <br></br><br></br>
    </div>
</div>
            <div className="TableContainer" style={{ marginTop: 50 }}>
                <BootstrapTable
                    striped
                    hover
                    keyField='# of Counterparties'
                    data={ this.state.products }
                    columns={ this.state.columns } />
            </div>
                </div>
        )
    }
}
