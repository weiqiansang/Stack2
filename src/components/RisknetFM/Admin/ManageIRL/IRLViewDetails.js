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
import '../../../../constants/dropdown-submenu.css';
//import '../../../../constants/dropdown.css';
//import '../../../../constants/dataTables.min.2.css'
//import '../../../../constants/bootstrap-4-navbar.css'
//import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
//import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../../constants/dropdown.css';
import '../../../../constants/mult-level-menu.css'
import * as UsersConstant from '../../../../constants/users.js'
export default class IRLViewDetailsPage extends Component {

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
            <div class="container">
                <div>
                    {UsersConstant.MenuConstant}
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
