const Markdown = `
import { useState } from "react";
import MaterialTable from "@material-table/core";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { tableTheme } from "@aeros-ui/themes"; 
import { MainTableCell, TableToolbar } from "@aeros-ui/tables";

const SortExample = () => {
    const theme = useTheme();
    const [data, setData] = useState([
        {
            id: 0,
            BATCH: {
                BATCHNO: 2252733,
                CONTACT: "PETER M. FEENEY",
                ITEMCOUNT: 2,
                PREMIUM: "17000.99",
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
            id: 1,
            BATCH: {
                BATCHNO: 2252675,
                CONTACT: "BIGGIE SMALLS",
                ITEMCOUNT: 7,
                PREMIUM: "2000.00",
                REFERENCE: "STAINLESSMETAL",
                STATUS: "SUBMITTED"
            },
            HISTORY: {
                CREATEDATE: "10/09/2022",
                RETURNDATE: null,
                SUBMITDATE: "10/18/2022",
            },
        },
        {
            id: 2,
            BATCH: {
                BATCHNO: 2252364,
                CONTACT: "CAROL KING",
                ITEMCOUNT: 1,
                PREMIUM: "17000.36",
                REFERENCE: null,
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
            customSort: (a, b) => {
                return a.BATCH.BATCHNO - b.BATCH.BATCHNO
            }
        },
        {
            title: "Create Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.CREATEDATE}</MainTableCell>),
            customSort: (a, b) => {
                return new Date(a.HISTORY.CREATEDATE) - new Date(b.HISTORY.CREATEDATE)
            }
        },
        {
            title: "Items",
            field: "BATCH",
            type: "numeric",
            width: "90px", 
            render: rowData => (<MainTableCell>{rowData.BATCH.ITEMCOUNT}</MainTableCell>),
            customSort: (a, b) => {
                return a.BATCH.ITEMCOUNT - b.BATCH.ITEMCOUNT
            }
        },
        {
            title: "Premium",
            field: "BATCH",
            type: "currency",
            width: "150px",
            render: rowData => (<MainTableCell>{rowData.BATCH.PREMIUM}</MainTableCell>),
            customSort: (a, b) => {
                return a.BATCH.PREMIUM - b.BATCH.PREMIUM
            }
        },
        {
            title: "Contact",
            field: "BATCH",
            type: "string",
            width: "215px",
            render: rowData => (<MainTableCell>{rowData.BATCH.CONTACT}</MainTableCell>),
            customSort: (a, b) => {
                return (a.BATCH.CONTACT > b.BATCH.CONTACT) - (a.BATCH.CONTACT < b.BATCH.CONTACT)
            }
        },
        {
            title: "Reference",
            field: "BATCH",
            type: "string",
            width: "150px",
            render: rowData => (<MainTableCell>{rowData.BATCH.REFERENCE}</MainTableCell>),
            customSort: (a, b) => {
                return (a.BATCH.REFERENCE > b.BATCH.REFERENCE) - (a.BATCH.REFERENCE < b.BATCH.REFERENCE)
            }
        },
        {
            title: "Submit Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.SUBMITDATE}</MainTableCell>),
            customSort: (a, b) => {
                return new Date(a.HISTORY.SUBMITDATE) - new Date(b.HISTORY.SUBMITDATE)
            }
        },
        {
            title: "Return Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.RETURNDATE}</MainTableCell>),
            customSort: (a, b) => {
                return new Date(a.HISTORY.RETURNDATE) - new Date(b.HISTORY.RETURNDATE)
            }
        },
        {
            title: "Status",
            field: "BATCH",
            type: "string",
            width: "200px",
            render: rowData => (<MainTableCell>{rowData.BATCH.STATUS}</MainTableCell>),
            customSort: (a, b) => {
                return (a.BATCH.STATUS > b.BATCH.STATUS) - (a.BATCH.STATUS < b.BATCH.STATUS)
            }
        },
    ]);

    return (
        <ThemeProvider theme={tableTheme}>
            <div style={{ margin: "1em" }}>
                <MaterialTable
                    title="Sort Example"
                    columns={columns}
                    data={data}
                    options={{
                        headerStyle: { backgroundColor: theme.palette.grid.main.header },
                        padding: "dense",
                        search: false,
                        sorting: true,
                    }}
                    components={{
                        Toolbar: props => (
                            <TableToolbar
                                {...props}
                            />
                        )
                    }}
                />
            </div>
        </ThemeProvider>
    )
}

export default SortExample;
`;
export default Markdown;