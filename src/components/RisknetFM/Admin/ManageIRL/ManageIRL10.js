import 'babel-polyfill';
import React, { Component, Fragment } from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem, Button, ButtonToolbar,ButtonGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { withRouter, Router } from "react-router-dom";
import cellEditFactory from 'react-bootstrap-table2-editor';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {selectFilter, textFilter} from 'react-bootstrap-table2-filter';
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
import '../../../../constants/mult-level-menu.css';
import * as UsersConstant from '../../../../constants/users.js';
import * as RoutesPath from "../../../../constants/routes";
//import history from '../../../../constants/history.js';
//import {IRLVIEWDETAILS} from "../../../../constants/routes";
//import * as ReactDOM from "react-bootstrap";
import  ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import Homepagebanner from "../../../../images/homepagebanner.jpg";

const selectOptions1 = [
    { value: 'Broker Dealer', label: 'Select Broker Dealer' },
    { value: 'Credit Union', label: 'Credit Union' },
    { value: 'Mortgate Bank', label: 'Mortgate Bank' },
    { value:  'Mortgate Insurer', label: 'Mortgate Insurer' },
    { value: 'Reinsurer Scorecard', label: 'Reinsurer Scorecard' },
    { value: 'U.S.Bank Holding Company Scorecard', label: 'U.S.Bank Holding Company Scorecard' },
    { value: 'U.S.Bank Scorecard' , label: 'U.S.Bank Scorecard' }
];

const SectorSelectOptions = {
    'Broker Dealer': 'Broker Dealer',
    'Credit Union': 'Credit Union',
    'Mortgate Bank': 'Mortgate Bank',
    'Mortgage Insurer': 'Mortgage Insurer',
    'Reinsurer Scorecard': 'Reinsurer Scorecard',
    'U.S. Bank Holding Company Scorecard': 'U.S. Bank Holding Company Scorecard',
    'U.S. Bank Scorecard': 'U.S. Bank Scorecard'
};

class IRLViewDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.stateModal= {
            isModalOpen: false,
            modalProduct: undefined,
            myRowID:0
        };
        this.clickButtonAssign=this.clickButtonAssign.bind(this);
        this.clickButtonViewDetails=this.clickButtonViewDetails.bind(this);
        this.getSelectedRowKeys=this.getSelectedRowKeys.bind(this);
        this.clickButtonUploadDocument=this.clickButtonUploadDocument.bind(this);
//        this.selectRowProp=this.selectRowProp.bind(this);
        this.mySelectedRowID=0;
        this.mySyncRowID=this.mySyncRowID.bind(this);

        this.state = {
            IRLSummary: [],
            columns: [{
                dataField: 'Review_Period',
                text: 'Review Period',
                filter: textFilter(
                    {
                        placeholder: 'All',
                        defaultValue: '',
                        className: 'bootstraptable-textFilter-class'
                    }
                ),
                sort: true,
                headerAlign: 'center'
            },
                {
                    dataField: 'Sector',
                    text: 'Sector',
                    filter: selectFilter({
                        options: SectorSelectOptions,
                        defaultValue: '',
                        placeholder: 'All',
                        className: 'bootstraptable-selectFilter-class'
                    }),
                    sort: true,
                    headerAlign: 'center'
                },{
                    dataField: 'Financials_As_Of_Date',
                    text: 'Financials As Of Date',
                    filter: textFilter(
                        {
                            placeholder: 'All',
                            defaultValue: '',
                            className: 'bootstraptable-textFilter-class'
                        }
                    ),
                    sort: true,
                    headerAlign: 'center'
                }, {
                    dataField: 'Num_of_Counterparties',
                    text: '# of Counterparties',
                    filter: textFilter(
                        {
                            placeholder: 'All',
                            defaultValue: '',
                            className: 'bootstraptable-textFilter-class'
                        }
                    ),
                    headerAlign: 'center'
                }, {
                    dataField: 'Adjusted',
                    text: 'Adjusted',
                    filter: textFilter(
                        {
                            placeholder: 'All',
                            defaultValue: '',
                            className: 'bootstraptable-textFilter-class'
                        }
                    ),
                    headerAlign: 'center',
                    headerStyle: {},
                    headerClasses: 'bootstraptable-header-class2'
                }, {
                    dataField: 'Status',
                    text: 'Status',
                    filter: textFilter(
                        {
                            placeholder: 'All',
                            defaultValue: '',
                            className: 'bootstraptable-textFilter-class'
                        }
                    ),
                    sort: true,
                    headerAlign: 'center'
                }, {
                    dataField: 'id',
                    text: 'id',
                    hidden: true
                }],
            thisRowID:0,

        }

        this.selectRowProp = {
            mode: 'radio',
//    bgColor: 'LightBlue', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
            bgColor: '#9E9E9E', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
            hideSelectColumn: true,  // enable hide selection column.
            clickToSelect: true,// you should enable clickToSelect, otherwise, you can't select column.
            clickToEdit: true,
//    selectionHeaderRenderer: () => 'X',
//    selectionRenderer: ({ mode, ...rest }) => (
//        <input type={ mode } { ...rest } />
//    ),

            onSelect: (row, isSelect, rowIndex, e) => {
//        console.log(row);
//        console.log("isSelect: " + isSelect);
//        console.log("rowIndex: " + rowIndex);
//        console.log(e);
                if (isSelect) {
                    console.log(row);
                    console.log("isSelect: " + isSelect);
                    console.log("rowIndex: " + rowIndex);
//            console.log(this.state.getSelectedRows);
//            console.log(this.state.rows);
//            this.setState({getSelectedRowKeys:rowIndex});
//            this.stateModal.myRowID=rowIndex;
                    console.log("myRowID: " + rowIndex);
//            console.log("mySelectedRowID: " + ...this.getSelectedRowKeys());
//            this.setState({mySelectedRowID: [...this.state.selectedRows, row]});
//            this.setState({
                    //              selectedRows: [...this.state.selectedRows, row]
                    //        });
//            console.log(this.getSelection());
                    console.log(document.getElementById("IRLSummaryT"));


                    var tb=document.getElementById("IRLSummaryT");
//            var myRows = tb.getSelectedRows();
//            console.log("myrows: " + myRows);
//            myRows.cell
                    var len=tb.rows.length;
                    var b=[];

                    var newdata =
                        {
                            "Review Period": "2015Q4",
                            "Sector": "U.S. Bank Scorecard",
                            "Financials As Of Date": "31-Dec-15",
                            "# of Counterparties": "1709",
                            "Adjusted": "39",
                            "Status": "Approved",
                            "id": "1"
                        };

                    this.mySyncRowID(rowIndex);
                    console.log("this.state.thisRowID: " + this.state.thisRowID);

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
        };

//        this.rowEvents = {
//            onClick: (e, row, rowIndex) => {
//                console.log("this.thisRowID: " + this.state.thisRowID);
//                console.log("rowEvents.rowIndex: " + rowIndex);
//                this.setState({thisRowID: rowIndex});
//                console.log("this.state.thisRowID: " + this.state.thisRowID);
//                console.log("this.state.columns: " + this.state.columns);
//            }
//        };
    }

    routeChange(path){
        this.props.history.push(path);
    }


    mySyncRowID(rowIndex) {
                    this.mySelectedRowID=rowIndex;
                    console.log("this.mySelectedRowID: "+this.mySelectedRowID);
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
        this.mySelectedRowID=3;
        return this.mySelectedRowID;
//        console.log(this.refs.IRLSummaryTable.state.selectedRowKeys);
    }

    clickButtonAssign()
    {
//        var tb=document.getElementById("IRLSummaryT");
//        console.log(tb);
//        console.log("selectedRowKeys: ");
//        console.log("clickButtonAssign");
//        console.log("this.mySelectedRowID: "+this.mySelectedRowID);
//        var tabRef=document.getElementById("IRLSummaryT");
//        var tableRef = document.getElementById('IRLSummaryT').getElementsByTagName('tbody')[0];
//        console.log(tableRef);
//        var trRef = document.getElementById('IRLSummaryT').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[this.mySelectedRowID];
//        console.log(trRef);
//        var tdRef = document.getElementById('IRLSummaryT').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[this.mySelectedRowID].getElementsByTagName('td')[5];
//        console.log(tdRef);
//        document.getElementById('IRLSummaryT').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[this.mySelectedRowID].getElementsByTagName('td')[5].value='Assigned';
//        tdRef = document.getElementById('IRLSummaryT').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[this.mySelectedRowID].getElementsByTagName('td')[5];
//        console.log(tdRef);
//        var myColumns=this.state.columns;
//        console.log(myColumns);
        var myData=this.state.IRLSummary;
//        console.log("myData: ")
//        console.log(myData);
        console.log("this.mySelectedRowID: " + this.mySelectedRowID +"; myData[this.mySelectedRowID]: ")
        console.log(myData[this.mySelectedRowID]);
        myData[this.mySelectedRowID].Status="Assigned";
        myData[this.mySelectedRowID].Review_Period="2019Q1";
//        console.log("this.mySelectedRowID: "+ this.mySelectedRowID);
//        this.setState({data:myData});
//        document.getElementById("buttonAssign").disabled = true;
//        document.getElementById("buttonInProcess").disabled = false;
//        document.getElementById("buttonUnApprove").disabled = true;
//        document.getElementById("buttonUploadDocument").disabled = false;
//        document.getElementById("buttonApprove").disabled = true;
//        document.getElementById("buttonViewDetails").disabled = false;
//        console.log("this.state.IRLSummary: ");
//        console.log(this.state.IRLSummary);
//        myColumns[this.mySelectedRowID]=


//        let tempColumns = this.state.columns;
        //console.log("tempColumns" +tempColumns );
//        console.log("IRLSummary" +this.state.IRLSummary );
//        console.log("selectedRowKeys: " + this.refs.IRLSummaryTable.state.);
//        console.log(this.props.selectRow);
}

    clickButtonInProcess(){

    }

    clickButtonUnApprove(){

    }

    clickButtonUploadDocument(){
        console.log("clickButtonUploadDocument");
        this.props.history.push(RoutesPath.IRLUPLOADDOCUMENT);
    }

    clickButtonApprove(){
//        this.refs.datatable.

    }

    clickButtonViewDetails()
    {
//        console.log(UsersConstant.routerConstants.LOGIN_IN);
//        console.log(RoutesPath.IRLVIEWDETAILS);
        this.routeChange(RoutesPath.IRLVIEWDETAILS);
    }

    render() {
        let lgClose = () => this.setState({ lgShow: false });

        return (
            <div id="all">
                <div id="top">
                    {UsersConstant.ManageIRL_Menu}
                </div>

                <div id="middle">
                    <div className="dropdown-submenu">
                        <div className="dropdown-submenu">
                            <BootstrapTable ref={"IRLSummaryTable"} id={"IRLSummaryT"}
                                            striped
                                            hover
                                            keyField='id'
                                            data={this.state.IRLSummary}
                                            columns={this.state.columns}
                                            filter={filterFactory()}
                                            pagination={paginationFactory()}
                                            selectRow={this.selectRowProp}
/*                                            rowEvents={this.rowEvents} */
//                                            tableStyle={ { border: '#0000FF 2.5px solid' } }
//                                            containerStyle={ { border: '#FFBB73 2.5px solid' } }
//                                            headerStyle={ { border: 'red 1px solid' } }
//                                            bodyStyle={ { border: 'green 1px solid' } }
                                            headerClasses="bootstraptable-header-class"
                                            wrapperClasses="boo"
                                            cellEdit={ cellEditFactory({
                                                mode: 'event',
                                                editCellClasses: 'myEditClass',
                                                afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!'); }
                                            }) }
                            />
                            <div>
                                <ButtonToolbar className={"pull-right"}>
                                    <Button id="buttonAssign" onClick={this.clickButtonAssign}>Assign</Button>
                                    <Button id="buttonInProcess" disabled
                                            onClick={this.clickButtonInProcess}>In-Process</Button>
                                    <Button id="buttonUnApprove" disabled
                                            onClick={this.clickButtonUnApprove}>Un-Approve</Button>
                                    <Button id="buttonUploadDocument" onClick={this.clickButtonUploadDocument}>Upload
                                        Document</Button>
                                    <Button id="buttonApprove" disabled
                                            onClick={this.clickButtonApprove}>Approve</Button>
                                    <Button id="buttonViewDetails" bsStyle="primary"
                                            onClick={() => this.setState({
                                                lgShow: true,
                                                modelRowID: this.stateModal.myRowID
                                            })}>View Details</Button>
                                    <FamilyProvider IRLSummary={this.state.IRLSummary}>
                                        <MyLargeModal show={this.state.lgShow} onHide={lgClose}
                                                      IRLSummary={this.state.IRLSummary}/>
                                    </FamilyProvider>
                                </ButtonToolbar>
                            </div>
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
    render() {
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <div class="container">
                <div>
                    {UsersConstant.MenuConstant}
                </div>
                <div class="dropdown-submenu">
                    <div class="dropdown-submenu">
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

                        <div>
                            <ButtonToolbar className={"pull-right"}>
                                <Button id="buttonAssign" disabled onClick={this.clickButtonAssign}>Assign</Button>
                                <Button id="buttonInProcess" disabled onClick={this.clickButtonInProcess}>In-Process</Button>
                                <Button id="buttonUnApprove" disabled onClick={this.clickButtonUnApprove}>Un-Approve</Button>
                                <Button id="buttonUploadDocument" onClick={this.clickButtonUploadDocument}>Upload Document</Button>
                                <Button id="buttonApprove" disabled onClick={this.clickButtonApprove}>Approve</Button>
                                <Button  id="buttonViewDetails" bsStyle="primary"
                                         onClick={() => this.setState({ lgShow: true, modelRowID: this.stateModal.myRowID })}>View Details</Button>
                                <FamilyProvider IRLSummary={this.state.IRLSummary}>
                                <MyLargeModal show={this.state.lgShow} onHide={lgClose} IRLSummary={this.state.IRLSummary} />
                                </FamilyProvider>
                            </ButtonToolbar>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
*/

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

function data_ADM_IRL_Approve(){
    return true;
}


export default withRouter(IRLViewDetailsPage);

class MyLargeModal extends React.Component {

    constructor(props) {
        super();
        this.state={
            IRLSummary:props.IRLSummary,
        }
        this.stateModal= {
            isModalOpen: false,
            modalProduct: undefined,
//            myRowID:0,
        };
//        this.stateModal={myRowID: props.stateModel.myRowID}
    }

//    insideModalRowID=this.stateModal.myRowID;

/*
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
            }]
    }

    /*
    inMoalRowID=0;

    componentDidMount() {
        axios.get('http://localhost:4000/IRLSummary')
            .then(response => {
                this.setState({
                    IRLSummary: response.data
                });
            });
    }
*/
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Manage IR/Limits</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br>insideModalRowID</br>
                    <div>
                        <div className="dropdown-submenu">
                            <BootstrapTable ref={"IRLSummaryTable"} id={"IRLSummaryTable"}
                                            striped
                                            hover
                                            keyField='id'
                                            data={ this.props.IRLSummary }
                                            columns={ this.props.columns }
                                            filter={ filterFactory() }
                                            pagination={ paginationFactory() }
                                            selectRow={this.props.selectRowProp}
/*                                            rowEvents={ rowEvents } */
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const FamilyContext=React.createContext();
export const FamilyProvider=FamilyContext.Provider;
export const FamilyConsumer=FamilyContext.Consumer;

const Child = ()=>{
    return <FamilyConsumer>{context => <p>{context}</p>}</FamilyConsumer>;
}
