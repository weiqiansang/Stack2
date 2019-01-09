import 'babel-polyfill';
import React, { Component, Fragment } from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem, Button, ButtonToolbar,ButtonGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

import '../../../../constants/mycss.css';
//import '../../../../constants/navbar.css';
//import '../../../../constants/table.css';
//import '../../../../constants/dropdown-submenu.css';
//import '../../../../constants/dropdown.css';
//import '../../../../constants/dataTables.min.2.css'
//import '../../../../constants/bootstrap-4-navbar.css'
//import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
//import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../../constants/dropdown.css';
import '../../../../constants/navbar-wrapper.css'
export default class ManageIRLPage extends Component {

    state = {
        IRLSummary: [],
        columns: [{
            dataField: 'Review Period',
            text: 'Review Period',
            sort: true
        },
            {
                dataField: 'Sector',
                text: 'Sector',
                sort: true,
                filter: textFilter()
            }, {
                dataField: 'Financials As Of Date',
                text: 'Financials As Of Date',
                sort: true
            }, {
                dataField: '# of Counterparties',
                text: '# of Counterparties'
            }, {
                dataField: 'Adjusted',
                text: 'Adjusted'
            }, {
                dataField: 'Status',
                text: 'Status',
                sort: true
            }/*, {
                dataField: 'id',
                text: 'id',
                sort: true
            }*/]
    }

    componentDidMount() {
        axios.get('http://localhost:4000/IRLSummary')
            .then(response => {
                this.setState({
                    IRLSummary: response.data
                });
            });
    }

    getSelectedRowKeys() {
        //Here is your answer
        console.log(this.refs.table.state.selectedRowKeys)
    }

    clickButtonAssign()
    {

    }

    clickButtonInProcess(){

    }

    clickButtonUnApprove(){

    }

    clickButtonUploadDocument(){

    }

    clickButtonApprove(){
//        this.refs.datatable.

    }

    clickButtonViewDetails()
    {
    }


    render() {
        return (
            <div>
                <div class={"container "} width="100%">
                    <navbar class="navbar-wrapper navbar-fixed-top navbar-light bg-faded">
                        <Navbar class={"navbar"} width="100%">
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
                                <LinkContainer to='/login'><MenuItem >Logout</MenuItem></LinkContainer>
                            </Nav>
                        </Navbar>
                    </navbar>
                    <br></br><br></br>
                </div>
                <div>
                    <div className="dropdown-submenu" style={{ marginTop: 50 }}>
                        <BootstrapTable ref={"IRLSummaryTable"} id={"IRLSummaryTable"}
                                        striped
                                        hover
                                        keyField='id'
                                        data={ this.state.IRLSummary }
                                        columns={ this.state.columns }
                                        filter={ filterFactory() }
                                        pagination={ paginationFactory() }
                                        selectRow={selectRowProp}
                                        rowEvents={ rowEvents }
                        />

                        <div className={"IRLToolbar1"}>
                            <ButtonToolbar className={"pull-right"}>
                                <Button id="buttonAssign" disabled onClick={this.clickButtonAssign}>Assign</Button>
                                <Button id="buttonInProcess" disabled onClick={this.clickButtonInProcess}>In-Process</Button>
                                <Button id="buttonUnApprove" disabled onClick={this.clickButtonUnApprove}>Un-Approve</Button>
                                <Button id="buttonUploadDocument" onClick={this.clickButtonUploadDocument}>Upload Document</Button>
                                <Button id="buttonApprove" disabled onClick={this.clickButtonApprove}>Approve</Button>
                                <Button  id="buttonViewDetails" onClick={this.clickButtonViewDetails}>View Details</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/*
const selectRowProp = ({id}, isSelected) => {

                                if (isSelected){
                                    this.setState(
                                        {
                                            selected: [...this.state.selected,id]

                                        }
                                    );


                                }/*
                                else {
                                    this.setState(
                                        {
                                            selected: [...this.state.selected.filter(it=>it!==id)]
                                        }
                                    )
                                }*/
/*  return false;
}
*/


const selectRowProp = {
    mode: 'radio',
    bgColor: 'LightBlue', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
    hideSelectColumn: true,  // enable hide selection column.
    clickToSelect: true,// you should enable clickToSelect, otherwise, you can't select column.
//    selectionHeaderRenderer: () => 'X',
//    selectionRenderer: ({ mode, ...rest }) => (
//        <input type={ mode } { ...rest } />
//    ),

    onSelect: (row, isSelect, rowIndex, e) => {
        console.log(row);
        console.log("isSelect: " + isSelect);
        console.log("rowIndex: " + rowIndex);
        console.log(e);
        if (isSelect) {
            switch (row.Status) {
                case "Unassigned":
                    document.getElementById("buttonAssign").disabled = false;
                    document.getElementById("buttonInProcess").disabled = true;
                    document.getElementById("buttonUnApprove").disabled = true;
                    document.getElementById("buttonUploadDocument").disabled = true;
                    document.getElementById("buttonApprove").disabled = true;
                    document.getElementById("buttonViewDetails").disabled = false;
                    return;
                case "Assigned":
                    document.getElementById("buttonAssign").disabled = true;
                    document.getElementById("buttonInProcess").disabled = false;
                    document.getElementById("buttonUnApprove").disabled = true;
                    document.getElementById("buttonUploadDocument").disabled = false;
                    document.getElementById("buttonApprove").disabled = true;
                    document.getElementById("buttonViewDetails").disabled = false;
                    return;
                case "Approved":
                    document.getElementById("buttonAssign").disabled = true;
                    document.getElementById("buttonInProcess").disabled = true;
                    document.getElementById("buttonUnApprove").disabled = true;
                    document.getElementById("buttonUploadDocument").disabled = false;
                    document.getElementById("buttonApprove").disabled = true;
                    document.getElementById("buttonViewDetails").disabled = false;
                    return;
                default:
                    return;
            }
        }
    }
}


const rowEvents = {
};

function data_ADM_IRL_Approve(){
    return true;
}

const rowID=0;
