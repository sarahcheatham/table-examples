import { useState } from "react";
import MaterialTable from "@material-table/core";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { tableTheme } from "@aeros-ui/themes"; 
import { MainTableCell, TableToolbar, TableFilterInput } from "@aeros-ui/tables";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CodeContainer from "../../../components/CodeContainer";
import Markdown from "./Markdown";

const FilterExample = () => {
    const theme = useTheme();
    const [showCode, setShowCode] = useState(false);
    const [showFilters, setFiltering] = useState(false);
    const [data, setData] = useState([
        {
            BATCH: {
                BATCHNO: 2252733,
                CONTACT: "PETER M. FEENEY",
                ITEMCOUNT: 2,
                PREMIUM: "17985",
                REFERENCE: "KATWD_2",
                STATUS: "OPEN"
            },
            HISTORY: {
                CREATEDATE: "10/17/2022",
                RETURNDATE: null,
                SUBMITDATE: null,
            },
        },
        {
            BATCH: {
                BATCHNO: 2252675,
                CONTACT: "PETER M. FEENEY",
                ITEMCOUNT: 1,
                PREMIUM: "2000",
                REFERENCE: "STAINLESSMETAL",
                STATUS: "SUBMITTED"
            },
            HISTORY: {
                CREATEDATE: "10/17/2022",
                RETURNDATE: null,
                SUBMITDATE: "10/18/2022",
            },
        },
        {
            BATCH: {
                BATCHNO: 2252364,
                CONTACT: "CAROL KING",
                ITEMCOUNT: 1,
                PREMIUM: "45000",
                REFERENCE: "CA0000024235",
                STATUS: "RETURNED"
            },
            HISTORY: {
                CREATEDATE: "10/10/2022",
                RETURNDATE: "10/15/2022",
                SUBMITDATE: "10/10/2022",
            },
        },
    ]);

    const [columns, setColumns] = useState([
        {
            title: "Batch",
            field: "BATCH",
            type: "numeric",
            align: "left",
            headerStyle: { textAlign: "left" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.BATCH.BATCHNO}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.BATCHNO.toString().includes(term)
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Create Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.CREATEDATE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.HISTORY.CREATEDATE.includes(term.toUpperCase())
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Items",
            field: "BATCH",
            type: "numeric",
            width: "90px", 
            render: rowData => (<MainTableCell>{rowData.BATCH.ITEMCOUNT}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.ITEMCOUNT.toString().includes(term)
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Premium",
            field: "BATCH",
            type: "currency",
            width: "150px",
            render: rowData => (<MainTableCell>{rowData.BATCH.PREMIUM}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.PREMIUM.includes(term)
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Contact",
            field: "BATCH",
            type: "string",
            width: "215px",
            render: rowData => (<MainTableCell>{rowData.BATCH.CONTACT}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.CONTACT.includes(term.toUpperCase())
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Reference",
            field: "BATCH",
            type: "string",
            width: "150px",
            render: rowData => (<MainTableCell>{rowData.BATCH.REFERENCE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.REFERENCE.includes(term.toUpperCase())
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Submit Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.SUBMITDATE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.HISTORY.SUBMITDATE !== null && rowData.HISTORY.SUBMITDATE.includes(term.toUpperCase())
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Return Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.RETURNDATE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.HISTORY.RETURNDATE !== null && rowData.HISTORY.RETURNDATE.includes(term.toUpperCase())
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Status",
            field: "BATCH",
            type: "string",
            width: "200px",
            render: rowData => (<MainTableCell>{rowData.BATCH.STATUS}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.STATUS.includes(term.toUpperCase())
            },
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
    ]);

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    return (
        <ThemeProvider theme={tableTheme}>
            <CodeContainer
                title="FilterExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title="Filter Example"
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            filtering: showFilters,
                            filterCellStyle: { padding: "0.5em" },
                            padding: "dense",
                            search: false,
                        }}
                        components={{
                            Toolbar: props => (
                                <TableToolbar
                                    {...props}
                                    showFilters={showFilters}
                                    onFilterClick={() => setFiltering(!showFilters)}
                                />
                            ),
                            Container: props => {
                                return (
                                    <Paper elevation={0} {...props}/>
                                )
                            }
                        }}
                    />
                </Paper>
            )}
        </ThemeProvider>
    )
}

export default FilterExample;