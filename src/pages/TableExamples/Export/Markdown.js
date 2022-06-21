const Markdown = `
import { useState } from "react";
import MaterialTable from "@material-table/core";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { tableTheme } from "@aeros-ui/themes"; 
import { MainTableCell, TableToolbar } from "@aeros-ui/tables";
import { ExportCsv, ExportPdf } from "@material-table/exporters";  

const ExportExample = () => {
    const theme = useTheme();
    const [data, setData] = useState([
        {
            id: 0,
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
            id: 1,
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
            id: 2,
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
            title: "id",
            field: "id",
            hidden: true,
        },
        {
            title: "Batch",
            field: "BATCH",
            type: "numeric",
            align: "left",
            headerStyle: { textAlign: "left" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.BATCH.BATCHNO}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.BATCH.BATCHNO
            }
        },
        {
            title: "Create Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.CREATEDATE}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.HISTORY.CREATEDATE
            }
        },
        {
            title: "Items",
            field: "BATCH",
            type: "numeric",
            width: "90px", 
            render: rowData => (<MainTableCell>{rowData.BATCH.ITEMCOUNT}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.BATCH.ITEMCOUNT
            }
        },
        {
            title: "Premium",
            field: "BATCH",
            type: "currency",
            width: "150px",
            render: rowData => (<MainTableCell>{rowData.BATCH.PREMIUM}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.BATCH.PREMIUM
            }
        },
        {
            title: "Contact",
            field: "BATCH",
            type: "string",
            width: "215px",
            render: rowData => (<MainTableCell>{rowData.BATCH.CONTACT}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.BATCH.CONTACT
            }
        },
        {
            title: "Reference",
            field: "BATCH",
            type: "string",
            width: "150px",
            render: rowData => (<MainTableCell>{rowData.BATCH.REFERENCE}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.BATCH.REFERENCE
            }
        },
        {
            title: "Submit Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.SUBMITDATE}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.HISTORY.SUBMITDATE
            }
        },
        {
            title: "Return Date",
            field: "HISTORY",
            type: "date",
            headerStyle: { textAlign: "center" },
            width: "125px",
            render: rowData => (<MainTableCell>{rowData.HISTORY.RETURNDATE}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.HISTORY.RETURNDATE
            }
        },
        {
            title: "Status",
            field: "BATCH",
            type: "string",
            width: "200px",
            render: rowData => (<MainTableCell>{rowData.BATCH.STATUS}</MainTableCell>),
            exportTransformer: rowData => {
                return rowData.BATCH.STATUS
            }
        },
    ]);

    return (
        <ThemeProvider theme={tableTheme}>
            <div style={{ margin: "1em" }}>
                <MaterialTable
                    title="Export Example"
                    columns={columns}
                    data={data}
                    options={{
                        exportAllData: true,
                        exportMenu: [{
                            label: "Export PDF",
                            exportFunc: (cols, datas) => ExportPdf(cols, datas, "Export Example")
                        }, {
                            label: "Export CSV",
                            exportFunc: (cols, datas) => ExportCsv(cols, datas, "Export Example")
                        }],
                        headerStyle: { backgroundColor: theme.palette.grid.main.header },
                        padding: "dense",
                        search: false,
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

export default ExportExample;`;
export default Markdown;