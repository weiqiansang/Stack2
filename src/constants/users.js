import 'babel-polyfill';
import React from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import * as RoutesPath from './routes';
import '../constants/mystyle.css'
import FMLogo from "../images/fm_logo_28_28.gif";
import Homepagebanner from "../images/homepagebanner.jpg";
//import mystyle1 from './mystyle1.less';
//import './mynavbar.css';
import './mynavbar.3.css';

export const userConstants = {
    APP_NAME: 'Mynet',
    APP_DESC: 'Mynet React UI',

    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'
};

const ManageIRL_Menu_navbar = {backgroundColor: 'FFF8DC'};

export const ManageIRL_Menu = (
    <div>
        <div className="myTopBorder">
            <span>{'\u00A0\u00A0'}</span><img src={FMLogo} width='11px' height='11px'/> <span> Fannie Mae RisknetFM React-DEV</span>
        </div>
        <div>
            <Navbar brand='React-Bootstrap' id={"mynar-navbar"}>
                    <Nav>
                    <NavItem eventKey={1} href="#" id="mynar-top-menu">File</NavItem>
                    <NavItem eventKey={2} href="#" id="mynar-top-menu">View</NavItem>
                    <NavItem eventKey={2} href="#" id="mynar-top-menu">GoTo</NavItem>
                    <NavItem eventKey={2} href="#" id="mynar-top-menu">Search</NavItem>
                        <NavDropdown eventKey={5} title="Admin" id="mynar-top-menu">
                        <NavDropdown eventKey={5.1} title="Add Counterparty" id="AddCounterparty">
                            <MenuItem eventKey={5.101}>Add Counterparty1</MenuItem>
                            <MenuItem eventKey={5.102}>Add Counterparty2</MenuItem>
                        </NavDropdown>
                        <MenuItem divider/>
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
                        <MenuItem divider/>
                        <MenuItem eventKey={5.15}>Admin Reports</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={5.16}>Capital Markets Maintenance</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={5.17}>Collateral Management</MenuItem>
                        <MenuItem eventKey={5.18}>IR Maintenance</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={5.19}>Counterparty Contact Information</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={5.20}>HCD Maintenance</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={5.21}>Lender Performance</MenuItem>
                        <MenuItem divider/>
                        <LinkContainer to={RoutesPath.MANAGEIRL}><MenuItem>Manage IR/Limits</MenuItem></LinkContainer>
                        <MenuItem divider/>
                        <MenuItem eventKey={5.23}>Other Transaction Maintenance</MenuItem>
                    </NavDropdown>
                        <NavItem eventKey={2} href="#" id="mynar-top-menu">Upload</NavItem>
                        <NavItem eventKey={2} href="#" id="mynar-top-menu">Portfolios/Triggers</NavItem>
                        <NavItem eventKey={2} href="#" id="mynar-top-menu">Window</NavItem>
                        <NavItem eventKey={2} href="#" id="mynar-top-menu">Help</NavItem>
                </Nav>
                <Nav pullRight>
                    <LinkContainer to={RoutesPath.RISKNETFM}><MenuItem  id="mynar-top-menu">HOME</MenuItem></LinkContainer>
                    <LinkContainer to={RoutesPath.LOG_IN}><MenuItem  id="mynar-navbar-right">Log Out</MenuItem></LinkContainer>
                </Nav>
            </Navbar>
        </div>
    </div>
)

export const Images = {
    FM_LOG: './images/fm_logo_28_28.gif'
}

export const routerConstants = {
    HOME: '/login',
    SIGN_UP: '/signup',
    LOGIN_IN: '/login',
    ACCOUNT: '/account',
    ADMIN: '/admin',
    NOT_FOUND: '/notfound',
    PASSWORD_FORGET: '/pw-forget'
}

export const TopBarMenuContant=
<div>
    <div className={"mult-level-menu"}>
        {MenuConstant}
    </div>
</div>

export const TopBarConstant=
<div>
    <ul className="myTopBorder">
        <span>{'\u00A0\u00A0'}</span><img src={FMLogo} width='11px' height='11px'/> <span> Fannie Mae RisknetFM React-DEV</span>
    </ul>
</div>

export const BottomBarConstant=
<div>
    <div className="myBottomBorder">
        <span>{'\u00A0\u00A0'}@2019 Fannie Mae. All Rights Reserved</span>
    </div>
</div>

export const MenuConstant=
<div>
    <ul className="myTopBorder">
        <span>{'\u00A0\u00A0'}</span><img src={FMLogo} width='11px' height='11px'/> <span> Fannie Mae RisknetFM React-DEV</span>
    </ul>
    <ul className="top-level-menu">
        <li><a href={RoutesPath.HOME}>Home</a></li>
        <li><a href="#">File</a></li>
        <li>
            <a href="#">View</a>
            <ul className="second-level-menu">
                <li><a href="#">View1</a></li>
                <li><a href="#">View2</a></li>
                <li>
                    <a href="#">View3</a>
                    <ul className="third-level-menu">
                        <li><a href="#">View311</a></li>
                        <li><a href="#">View312</a></li>
                        <LinkContainer to='/login'><MenuItem>Logout</MenuItem></LinkContainer>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#">GoTo</a></li>
        <li><a href="#">Search</a></li>
        <li>
            <a href="#">Admin</a>
            <ul className="second-level-menu">
                <li>
                    <a href="#">Add Counterparty</a>
                    <ul className="third-level-menu">
                        <li><a href="#">Add Counterparty 1</a></li>
                        <li><a href="#">Add Counterparty 2</a></li>
                    </ul>
                </li>
                <li><a href="#">Add orphaned Alias</a></li>
                <li><a href="#">Add Parent</a></li>
                <li><a href="#">Change Counterparty Data</a></li>
                <li><a href="#">Corporate Structure Change Log</a></li>
                <li><a href="#">Cross Ref Maintenance</a></li>
                <li><a href="#">Delete Counterparty</a></li>
                <li><a href="#">Delete Orphaned Alias</a></li>
                <li><a href="#">Manage Admin Ratios</a></li>
                <li><a href="#">Manage Email Recipients</a></li>
                <li><a href="#">Manage Financial Items</a></li>
                <li><a href="#">Merge Counterparties</a></li>
                <li><a href="#">Process Control Management</a></li>
                <li><a href="#">Remove Parent Modify Ownership</a></li>
                <li><a href="#">Admin Reports</a></li>
                <li><a href="#">Collateral Management</a></li>
                <li><a href="#">IR Maintenance</a></li>
                <li><a href="#">Counterparty Contact Information</a></li>
                <li><a href="#">HCD Maintenance</a></li>
                <li><a href="#">Lender Performance</a></li>
                <LinkContainer to='/admin/manageIRL'><MenuItem >Manage IR/Limits</MenuItem></LinkContainer>
                <li>
                    <a href="#">Other Transaction Maintenance</a>
                    <ul className="third-level-menu">
                        <li><a href="#">Other  1</a></li>
                        <li><a href="#">Other  2</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#">Upload</a></li>
        <li><a href="#">Portfolios/Triggers</a></li>
        <li><a href="#">Window</a></li>
        <li><a href={RoutesPath.MYTEST}>Help</a></li>
        <li><a href="/login">Log Out</a></li>
    </ul>
</div>


export const Constant_1=
    <div className="container">
    <h1>Bootstrap Custom navbar Example</h1>
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Web</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home <span
                        className="sr-only">(current)</span></a></li>
                    <li><a href="https://www.jquery-az.com/php-tutorials/">PHP</a></li>
                    <li><a href="https://www.jquery-az.com/jquery-tips/">jQuery</a></li>
                    <li className="dropdown">
                        <a href="https://www.jquery-az.com/bootstrap-tips-tutorials/"
                           className="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false">Bootstrap <span
                            className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a
                                href="https://www.jquery-az.com/bootstrap-carousel-5-single-multiple-horizontal-and-vertical-sliding-demos/">Carousel</a>
                            </li>
                            <li><a
                                href="https://www.jquery-az.com/bootstrap-form-customized-styles-6-online-examples/">Forms</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><a
                                href="https://www.jquery-az.com/bootstrap-select-5-beautiful-styles/">Select</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">

                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false">About <span
                            className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="https://www.jquery-az.com/about-us/">Terms</a></li>
                            <li><a href="https://www.jquery-az.com/contact/">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
