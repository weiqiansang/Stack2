import 'babel-polyfill';
import React, { Component, Fragment } from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem, Button, ButtonToolbar,ButtonGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

import '../mycss.css';
//import '../../../../constants/navbar.css';
//import '../../../../constants/table.css';
import '../dropdown-submenu.css';
//import '../../../../constants/dropdown.css';
//import '../../../../constants/dataTables.min.2.css'
//import '../../../../constants/bootstrap-4-navbar.css'
//import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './constants/dropdown.css';
import '../mult-level-menu.css';
import * as UsersConstant from '../users.js';
import '../style.css'
import '../mystyle.css'

import FMLogo from '../../images/fm_logo_28_28.gif';
import FannieMaeLogo1 from '../../images/FannieMaeLogo1.gif';
export default class MyTestPage extends Component {
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
        var mySpace='       ';
        return (
            <div>
                <div class="myTopBorder">
                    <span>{'\u00A0\u00A0'}</span><img src={FMLogo} width='11px' height='11px'/> <span> Fannie Mae RisknetFM React-DEV</span>
                </div>
                <div>
                    {UsersConstant.MenuConstant}
                </div>
                <divbodyStyle>
                    <p><h1>{this.state.msg}</h1></p>
                </divbodyStyle>
            <div class="myBottomBorder">
                <span>{'\u00A0\u00A0'}@2019 Fannie Mae. All Rights Reserved</span>
            </div>
            </div>
        )
    }
}
