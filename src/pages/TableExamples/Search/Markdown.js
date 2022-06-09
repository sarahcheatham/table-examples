const Markdown = `
import { useState } from 'react';
import MaterialTable from '@material-table/core';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes'; 
import { MainTableCell } from "@aeros-ui/tables";

const SearchExample = () => {
    const theme = useTheme()
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
            render: rowData => (<MainTableCell>{rowData.BATCH.BATCHNO}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.BATCHNO.toString().includes(term)
            },
        },
        {
            title: "Create Date",
            field: "HISTORY",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.HISTORY.CREATEDATE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.HISTORY.CREATEDATE.includes(term)
            },
        },
        {
            title: "Items",
            field: "BATCH",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.BATCH.ITEMCOUNT}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.ITEMCOUNT.toString().includes(term)
            },
        },
        {
            title: "Premium",
            field: "BATCH",
            type: "currency",
            render: rowData => (<MainTableCell>{rowData.BATCH.PREMIUM}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.PREMIUM.includes(term)
            },
        },
        {
            title: "Contact",
            field: "BATCH",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.BATCH.CONTACT}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.CONTACT.includes(term)
            },
        },
        {
            title: "Reference",
            field: "BATCH",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.BATCH.REFERENCE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.REFERENCE.includes(term)
            },
        },
        {
            title: "Submit Date",
            field: "HISTORY",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.HISTORY.SUBMITDATE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.HISTORY.SUBMITDATE !== null && rowData.HISTORY.SUBMITDATE.includes(term)
            },
        },
        {
            title: "Return Date",
            field: "HISTORY",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.HISTORY.RETURNDATE}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.HISTORY.RETURNDATE !== null && rowData.HISTORY.RETURNDATE.includes(term)
            },
        },
        {
            title: "Status",
            field: "BATCH",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.BATCH.STATUS}</MainTableCell>),
            customFilterAndSearch: (term, rowData) => {
                return rowData.BATCH.STATUS.includes(term)
            },
        },
    ])

    return (
        <ThemeProvider theme={tableTheme}>
            <div style={{ margin: '1em' }}>
                <MaterialTable
                    title="Batch Listing"
                    columns={columns}
                    data={data}
                    options={{
                        headerStyle: { backgroundColor: theme.palette.grid.main.header },
                        filtering: false,
                        filterCellStyle: { padding: "0.5em" },
                        padding: "dense",
                        search: true,
                        searchFieldStyle: { marginRight: "1em" }
                    }}
                />
            </div>
        </ThemeProvider>
    )
}

export default SearchExample;`

export default Markdown;