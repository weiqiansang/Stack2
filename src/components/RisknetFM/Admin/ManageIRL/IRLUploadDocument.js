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
        msg: 'start'
    };
/*
    componentDidMount(){
        this.setState({
            msg: 'end'
        });
    }
*/
    render() {
        return (
            <div>
            <p><h1>{this.state.msg}</h1></p>
            </div>
        )
    }
}

/*
            <div class="container">
                <div>
                    {UsersConstant.MenuConstant}
                </div>
            </div>
 */
