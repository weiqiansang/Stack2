"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Athlete",
                    field: "athlete",
                    width: 150
                },
                {
                    headerName: "Age",
                    field: "age",
                    width: 90
                },
                {
                    headerName: "Country",
                    field: "country",
                    width: 120
                },
                {
                    headerName: "Year",
                    field: "year",
                    width: 90
                },
                {
                    headerName: "Date",
                    field: "date",
                    width: 110
                },
                {
                    headerName: "Sport",
                    field: "sport",
                    width: 110
                },
                {
                    headerName: "Gold",
                    field: "gold",
                    width: 100
                },
                {
                    headerName: "Silver",
                    field: "silver",
                    width: 100
                },
                {
                    headerName: "Bronze",
                    field: "bronze",
                    width: 100
                },
                {
                    headerName: "Total",
                    field: "total",
                    width: 100
                }
            ],
            rowSelection: "single",
            rowData: []
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        const httpRequest = new XMLHttpRequest();
        const updateData = data => {
            this.setState({ rowData: data });
        };

        httpRequest.open(
            "GET",
            "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
        );
        httpRequest.send();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                updateData(JSON.parse(httpRequest.responseText));
            }
        };
    }

    onSelectionChanged() {
        var selectedRows = this.gridApi.getSelectedRows();
        var selectedRowsString = "";
        selectedRows.forEach(function(selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.athlete;
        });
        document.querySelector("#selectedRows").innerHTML = selectedRowsString;
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div class="test-container">
                    <div class="test-header">
                        Selection:
                        <span id="selectedRows" />
                    </div>
                    <div
                        id="myGrid"
                        style={{
                            boxSizing: "border-box",
                            height: "100%",
                            width: "100%"
                        }}
                        className="ag-theme-balham"
                    >
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowSelection={this.state.rowSelection}
                            onGridReady={this.onGridReady.bind(this)}
                            onSelectionChanged={this.onSelectionChanged.bind(this)}
                            rowData={this.state.rowData}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<GridExample />, document.querySelector("#root"));
