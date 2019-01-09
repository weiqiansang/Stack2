import 'babel-polyfill';
//import htmlContent from './index.html';
import React, { Component, Fragment} from "react";
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, ButtonToolbar } from "react-bootstrap";
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
//import './dropdown-submenu.css'
const reload = () => window.location.reload();
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
        return(buttonsInstance);
    }
    /*
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="index1.html" onEnter={reload} />
                    </Switch>
                </Router>
            </div>
        );
    }


    render() {
        return (
            <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
        );
  }  */

}

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
