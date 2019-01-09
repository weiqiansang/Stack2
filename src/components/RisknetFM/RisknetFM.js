import 'babel-polyfill';
import React, { Component } from 'react';
//import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

import '../../constants/mult-level-menu.css';
//import '../../constants/mystyle.css';
import * as UsersConstant from '../../constants/users.js';
//import {BottomBarConstant, TopBarConstant} from "../../constants/users";
//import '../../constants/mystyle3.css';
import Homepagebanner from "../../images/homepagebanner.jpg";
import FMLogo from "../../images/fm_logo_28_28.gif";
//import {ButtonToolbar,Button} from "react-bootstrap/es/ButtonToolbar";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem, Button, ButtonToolbar,ButtonGroup} from "react-bootstrap";

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
            <div id="all">
                <div id="top">
                    {UsersConstant.ManageIRL_Menu}
                </div>

                <div id="middle">
                    <div>
                        <img src={Homepagebanner} width="100%"/>
                        <br/>
                        <br/>
                        <h1 align="center" font-size="30em">Welcome, RiskNetFM User!</h1>
                        <div align="center">
                            <ButtonToolbar align="center">
                                <ButtonGroup vertical>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="btn-group-vertical">
                                        <Button type="button" className="btn btn-primary">Corporate</Button>
                                        <br/>
                                        <Button type="button" className="btn btn-primary">Capital Markets</Button>
                                        <br/>
                                        <Button type="button" className="btn btn-primary">Single-Family</Button>
                                        <br/>
                                        <Button type="button" className="btn btn-primary">HCD</Button>
                                    </div>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    {UsersConstant.BottomBarConstant}
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
