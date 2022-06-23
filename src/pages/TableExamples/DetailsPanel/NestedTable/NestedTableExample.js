import { useState } from "react";  
import { useTheme } from "@mui/material/styles";  
import MaterialTable from "@material-table/core";  
import TableContainer from "@mui/material/TableContainer"; 
import Table from "@mui/material/Table";   
import TableBody from "@mui/material/TableBody"; 
import Paper from '@mui/material/Paper';
import { TableIcons } from "@aeros-ui/icons";
import { NestedTableHeader, NestedColumnHeaders, NestedTableRow, MainTableCell, NestedTableCell } from "@aeros-ui/tables"; 
import { ThemeProvider } from "@mui/material/styles";
import { tableTheme } from "@aeros-ui/themes";
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';

const NestedTableExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedChildId, setSelectedChildId] = useState(null);
    const [data, setData] = useState([
        {
            id: 0,
            AFFIDAVITNO: "2022-0077",
            POLICYNO: "PAC7226538",
            INSUREDNAME: "BUHRE AVE. REALTY INC.",
            TYPE: "D",
            PREMIUM: "22,730",
            INCEPTION: "01/16/2022",
            EXPIRATION: "01/16/2023",
            BATCH: 4201111,
            ITEMNO: 1,
            STATE: "P",
            CHILDTRANSACTIONS: [
                {
                    id: 100,
                    AFFIDAVITNO: "2022-0077",
                    POLICYNO: "PAC7226538",
                    INSUREDNAME: null,
                    TYPE: "E",
                    PREMIUM: "100",
                    INCEPTION: "02/20/2022",
                    EXPIRATION: null,
                    BATCH: 4201023,
                    ITEMNO: 2,
                    STATE: "P"

                },
                {
                    id: 101,
                    AFFIDAVITNO: "2022-0077",
                    POLICYNO: "PAC7226538",
                    INSUREDNAME: null,
                    TYPE: "E",
                    PREMIUM: "200",
                    INCEPTION: "01/20/2022",
                    EXPIRATION: null,
                    BATCH: 4201080,
                    ITEMNO: 4,
                    STATE: "P"
                }
            ]
        },
        {
            id: 1,
            AFFIDAVITNO: "2022-0079",
            POLICYNO: "CX163533",
            INSUREDNAME: "MIRANDA CORDOVA",
            TYPE: "D",
            PREMIUM: "2,708",
            INCEPTION: "01/20/2022",
            EXPIRATION: "01/20/2023",
            BATCH: 4201021,
            ITEMNO: 1,
            STATE: "P",
            CHILDTRANSACTIONS: [
                {
                    id: 102,
                    AFFIDAVITNO: "2022-0079",
                    POLICYNO: "CX163533",
                    INSUREDNAME: null,
                    TYPE: "E",
                    PREMIUM: "100",
                    INCEPTION: "02/20/2022",
                    EXPIRATION: null,
                    BATCH: 4200778,
                    ITEMNO: 2,
                    STATE: "P"

                },
            ]
        },
        {
            id: 2,
            AFFIDAVITNO: "2022-0080",
            POLICYNO: "CX13536",
            INSUREDNAME: "LOURDES P AGUILERA",
            TYPE: "D",
            PREMIUM: "2,430",
            INCEPTION: "04/20/2022",
            EXPIRATION: "04/20/2023",
            BATCH: 42015011,
            ITEMNO: 1,
            STATE: null,
            CHILDTRANSACTIONS: [
                {
                    id: 103,
                    AFFIDAVITNO: "2022-0080",
                    POLICYNO: "CX13536",
                    INSUREDNAME: null,
                    TYPE: "E",
                    PREMIUM: "100",
                    INCEPTION: "05/20/2022",
                    EXPIRATION: null,
                    BATCH: 4201525,
                    ITEMNO: 2,
                    STATE: null
                },
            ] 
        }
    ]);

    const [columns, setColumns] = useState([
        {
            title: "Affidavit No",
            field: "AFFIDAVITNO",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.AFFIDAVITNO}</MainTableCell>),
            width: "125px"
        },
        {
            title: "Policy No",
            field: "POLICY NO",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.POLICYNO}</MainTableCell>),
            width: "150px"
        },
        {
            title: "Insured Name",
            field: "INSUREDNAME",
            type: "string",
            render: rowData => (<MainTableCell noWrap>{rowData.INSUREDNAME}</MainTableCell>),
            width: "200px",
            cellStyle: { maxWidth: "200px" }
        },
        {
            title: "Type",
            field: "TYPE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.TYPE}</MainTableCell>),
            width: "50px",
        },
        {
            title: "Premium",
            field: "PREMIUM",
            type: "currency",
            render: rowData => (<MainTableCell>{rowData.PREMIUM}</MainTableCell>),
            width: "125px"
        },
        {
            title: "Inception",
            field: "INCEPTION",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.INCEPTION}</MainTableCell>),
            width: "100px"
        },
        {
            title: "Expiration",
            field: "EXPIRATION",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EXPIRATION}</MainTableCell>),
            width: "100px",
        },
        {
            title: "Batch",
            field: "BATCH",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.BATCH}</MainTableCell>),
            width: "100px"
        },
        {
            title: "Item",
            field: "ITEMNO",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.ITEMNO}</MainTableCell>),
            width: "50px",
        },
        {
            title: "State",
            field: "STATE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.STATE}</MainTableCell>),
            width: "50px",
        },
    ]);
    
    const handleRowClick = row => {
        closeRow();
        const rowCopy = {...row};
        const dataCopy = [...data]
        dataCopy[rowCopy.tableData.id] = rowCopy;
        setSelectedRow(rowCopy)
        setData(dataCopy)
    };

    const closeRow = () => {
        const dataCopy = [...data];
        if(selectedRow !== null){
            const rowCopy = {...selectedRow};
            if(rowCopy.tableData.showDetailPanel){
                rowCopy.tableData.showDetailPanel = false;
            }
            dataCopy[rowCopy.tableData.id] = rowCopy;
        }
        setData(dataCopy)
        setSelectedRow(null)
        setSelectedChildId(null)
    };

    const columnHeaders = [
        "Affidavit No",
        "Policy No",
        "Insured Name",
        "Type",
        "Premium",
        "Inception",
        "Expiration",
        "Batch",
        "Item",
        "State"
    ];

    const handleSelectChild = rowData => {
        setSelectedChildId(rowData.id)
    };

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    return (
        <ThemeProvider theme={tableTheme}>
             <CodeContainer
                title="NestedTableExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title="Nested Table Example"
                        columns={columns}
                        data={data}
                        icons={TableIcons}
                        detailPanel={({ rowData }) => (
                            rowData.CHILDTRANSACTIONS.length > 0 ? (
                                <TableContainer>
                                    <Table>
                                        <NestedTableHeader
                                            tableHeader="Related Child Transactions"
                                            colSpan={columns.length + 1}
                                            dense="dense"
                                        />
                                        <NestedColumnHeaders
                                            columnHeaders={columnHeaders}
                                            dense="dense"
                                        />
                                        <TableBody>
                                            {rowData.CHILDTRANSACTIONS.map((c, i) => (
                                                <NestedTableRow 
                                                key={`child-transaction-${i}`} 
                                                dense="dense" 
                                                onClick={() => handleSelectChild(c)} 
                                                selected={c.id === selectedChildId}
                                                >
                                                    <NestedTableCell dense="dense">{c.AFFIDAVITNO}</NestedTableCell>
                                                    <NestedTableCell dense="dense" align="left">{c.POLICYNO}</NestedTableCell>
                                                    <NestedTableCell dense="dense" width="200px">{c.INSUREDNAME !== null ? c.INSUREDNAME : "-"}</NestedTableCell>
                                                    <NestedTableCell dense="dense">{c.TYPE}</NestedTableCell>
                                                    <NestedTableCell dense="dense">{c.PREMIUM}</NestedTableCell>
                                                    <NestedTableCell dense="dense" align="left">{c.INCEPTION}</NestedTableCell>
                                                    <NestedTableCell dense="dense" align="left">{c.EXPIRATION !== null ? c.EXPIRATION : "-"}</NestedTableCell>
                                                    <NestedTableCell dense="dense">{c.BATCH}</NestedTableCell>
                                                    <NestedTableCell dense="dense">{c.ITEMNO}</NestedTableCell>
                                                    <NestedTableCell dense="dense">{c.STATE}</NestedTableCell>
                                                </NestedTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            ) : null
                        )}
                        onRowClick={(e, selectedRow, togglePanel) => {handleRowClick(selectedRow); togglePanel()}}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            detailsPanelType: "single",
                            showDetailPanelIcon: true,
                            rowStyle: rowData => ({
                                backgroundColor: selectedRow !== null && selectedRow.tableData.id === rowData.tableData.id ? theme.palette.grid.main.active : undefined
                            }),
                            padding: "dense",
                            search: false,
                        }}
                        components={{
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

export default NestedTableExample;