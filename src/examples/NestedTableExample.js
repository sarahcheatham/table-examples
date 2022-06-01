// import { useState } from 'react';  
// import { useTheme } from '@mui/material/styles';  
import { Component } from 'react';
import MaterialTable from '@material-table/core';  
import TableContainer from '@mui/material/TableContainer'; 
import Table from '@mui/material/Table';   
import TableBody from '@mui/material/TableBody';  
import { TableIcons } from '@aeros-ui/icons';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
// import NestedTableHeader from '../NestedTableHeader';
// import NestedTableRow from '../NestedTableRow';
// import NestedTableCell from '../NestedTableCell';
import { TableToolbar, NestedTableHeader, NestedTableRow, NestedTableCell } from '@aeros-ui/tables'; 
import { ThemeProvider } from '@mui/material/styles';
// import tableTheme from '../TableTheme';
import { tableTheme } from '@aeros-ui/themes';

class NestedTableExample extends Component {
    state = {
        density: 'dense',
        showFilters: false,
        selectedRow: null,
        selectedRowId: null,
        selectedChildId: null,
        data: [
            {
                id: 0,
                AFFIDAVITNO: "2022-0077",
                POLICYNO: "PAC7226538",
                INSUREDNAME: "BUHRE AVE. REALTY INC.",
                TYPE: 'D',
                PREMIUM: '22,730',
                INCEPTION: '01/16/2022',
                EXPIRATION: '01/16/2023',
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
                        PREMIUM: '100',
                        INCEPTION: '02/20/2022',
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
                        PREMIUM: '200',
                        INCEPTION: '01/20/2022',
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
                TYPE: 'D',
                PREMIUM: '2,708',
                INCEPTION: '01/20/2022',
                EXPIRATION: '01/20/2023',
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
                        PREMIUM: '100',
                        INCEPTION: '02/20/2022',
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
                TYPE: 'D',
                PREMIUM: '2,430',
                INCEPTION: '04/20/2022',
                EXPIRATION: '04/20/2023',
                BATCH: 4205011,
                ITEMNO: 1,
                STATE: null,
                CHILDTRANSACTIONS: [
                    {
                        id: 103,
                        AFFIDAVITNO: "2022-0080",
                        POLICYNO: "CX13536",
                        INSUREDNAME: null,
                        TYPE: "E",
                        PREMIUM: '100',
                        INCEPTION: '05/20/2022',
                        EXPIRATION: null,
                        BATCH: 4201525,
                        ITEMNO: 2,
                        STATE: null
                    },
                ] 
            }
        ]
    }
    // const [density, setDensity] = useState('dense');
    // const [showFilters, setFiltering] = useState(false);
    // const [selectedRowId, setSelectedRowId] = useState(null);
    // const [selectedChildId, setSelectedChildId] = useState(null);
    // const [data, setData] = useState([
    //     {
    //         id: 0,
    //         AFFIDAVITNO: "2022-0077",
    //         POLICYNO: "PAC7226538",
    //         INSUREDNAME: "BUHRE AVE. REALTY INC.",
    //         TYPE: 'D',
    //         PREMIUM: '22,730',
    //         INCEPTION: '01/16/2022',
    //         EXPIRATION: '01/16/2023',
    //         BATCH: 4201111,
    //         ITEMNO: 1,
    //         STATE: "P",
    //         CHILDTRANSACTIONS: [
    //             {
    //                 id: 100,
    //                 AFFIDAVITNO: "2022-0077",
    //                 POLICYNO: "PAC7226538",
    //                 INSUREDNAME: null,
    //                 TYPE: "E",
    //                 PREMIUM: '100',
    //                 INCEPTION: '02/20/2022',
    //                 EXPIRATION: null,
    //                 BATCH: 4201023,
    //                 ITEMNO: 2,
    //                 STATE: "P"

    //             },
    //             {
    //                 id: 101,
    //                 AFFIDAVITNO: "2022-0077",
    //                 POLICYNO: "PAC7226538",
    //                 INSUREDNAME: null,
    //                 TYPE: "E",
    //                 PREMIUM: '200',
    //                 INCEPTION: '01/20/2022',
    //                 EXPIRATION: null,
    //                 BATCH: 4201080,
    //                 ITEMNO: 4,
    //                 STATE: "P"
    //             }
    //         ]
    //     },
    //     {
    //         id: 1,
    //         AFFIDAVITNO: "2022-0079",
    //         POLICYNO: "CX163533",
    //         INSUREDNAME: "MIRANDA CORDOVA",
    //         TYPE: 'D',
    //         PREMIUM: '2,708',
    //         INCEPTION: '01/20/2022',
    //         EXPIRATION: '01/20/2023',
    //         BATCH: 4201021,
    //         ITEMNO: 1,
    //         STATE: "P",
    //         CHILDTRANSACTIONS: [
    //             {
    //                 id: 102,
    //                 AFFIDAVITNO: "2022-0079",
    //                 POLICYNO: "CX163533",
    //                 INSUREDNAME: null,
    //                 TYPE: "E",
    //                 PREMIUM: '100',
    //                 INCEPTION: '02/20/2022',
    //                 EXPIRATION: null,
    //                 BATCH: 4200778,
    //                 ITEMNO: 2,
    //                 STATE: "P"

    //             },
    //         ]
    //     },
    //     {
    //         id: 2,
    //         AFFIDAVITNO: "2022-0080",
    //         POLICYNO: "CX13536",
    //         INSUREDNAME: "LOURDES P AGUILERA",
    //         TYPE: 'D',
    //         PREMIUM: '2,430',
    //         INCEPTION: '04/20/2022',
    //         EXPIRATION: '04/20/2023',
    //         BATCH: 42015011,
    //         ITEMNO: 1,
    //         STATE: null,
    //         CHILDTRANSACTIONS: [
    //             {
    //                 id: 103,
    //                 AFFIDAVITNO: "2022-0080",
    //                 POLICYNO: "CX13536",
    //                 INSUREDNAME: null,
    //                 TYPE: "E",
    //                 PREMIUM: '100',
    //                 INCEPTION: '05/20/2022',
    //                 EXPIRATION: null,
    //                 BATCH: 4201525,
    //                 ITEMNO: 2,
    //                 STATE: null
    //             },
    //         ] 
    //     }
    // ])
    
    // const theme = useTheme();
    
    handleRowClick = (row, rowId) => {
        this.closeRow();
        const rowCopy = {...row};
        const dataCopy = [...this.state.data]
        dataCopy[rowCopy.tableData.id] = rowCopy;
        this.setState({ selectedRowId: rowId, selectedRow: rowCopy, data: dataCopy})
        // setSelectedRowId(rowId)
        // setData(dataCopy)
    }

    handleDensityClick = () => {
        let density;
        this.state.density === 'normal' ? density = 'dense' : density = 'normal';
        this.setState({ density })
    };

    closeRow = () => {
        const dataCopy = [...this.state.data];
        if(this.state.selectedRow !== null){
            const rowCopy = {...this.state.selectedRow};
            if(rowCopy.tableData.showDetailPanel){
                rowCopy.tableData.showDetailPanel = false;
            }
            dataCopy[rowCopy.tableData.id] = rowCopy;
        }
    
        this.setState({ 
            data: dataCopy,
            selectedRowId: null, 
            selectedRow: null, 
            selectedChildId: null
        })
    }

    columns = [
        {
            title: "Affidavit No",
            field: "AFFIDAVITNO",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.AFFIDAVITNO}</Typography>
            },
            width: '125px'
        },
        {
            title: "Policy No",
            field: "POLICY NO",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.POLICYNO}</Typography>
            },
            width: '150px'
        },
        {
            title: "Insured Name",
            field: "INSUREDNAME",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.INSUREDNAME}</Typography>
            },
            width: '200px'
        },
        {
            title: "Type",
            field: "TYPE",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.TYPE}</Typography>
            },
            width: '50px'
        },
        {
            title: "Premium",
            field: "PREMIUM",
            type: "currency",
            render: rowData => {
                return <Typography variant="body2">{rowData.PREMIUM}</Typography>
            },
            width: '125px'
        },
        {
            title: "Inception",
            field: "INCEPTION",
            type: "date",
            render: rowData => {
                return <Typography variant="body2">{rowData.INCEPTION}</Typography>
            },
            width: '100px'
        },
        {
            title: "Expiration",
            field: "EXPIRATION",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.EXPIRATION}</Typography>
            },
            width: '100px',
        },
        {
            title: "Batch",
            field: "BATCH",
            type: "numeric",
            render: rowData => {
                return <Typography variant="body2">{rowData.BATCH}</Typography>
            },
            width: '100px'
        },
        {
            title: "Item",
            field: "ITEMNO",
            type: "numeric",
            render: rowData => {
                return <Typography variant="body2">{rowData.ITEMNO}</Typography>
            },
            width: '50px',
        },
        {
            title: "State",
            field: "STATE",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.STATE}</Typography>
            },
            width: '50px',
        },
    ]

    tableSubheaders = ["Related Child Transactions"]

    handleSelectChild = rowData => {
        console.log("ROW DATA:", rowData)
        this.setState({ selectedChildId: rowData.id })
        // setSelectedChildId(rowData.id)
    }

    setFiltering = () => {
        this.setState({ showFilters: !this.state.showFilters })
    }
    render(){

    return (
        <ThemeProvider theme={tableTheme}>
        <MaterialTable
            title="Affidavit Transactions"
            columns={this.columns}
            data={this.state.data}
            icons={TableIcons}
            detailPanel={({ rowData }) => (
                rowData.CHILDTRANSACTIONS.length > 0 ? (
                    <TableContainer>
                        <Table>
                            <NestedTableHeader
                                tableSubheaders={['Related Child Transactions']}
                                colSpan={this.columns.length + 1}
                                dense={this.state.density}
                            />
                            <TableBody>
                                {rowData.CHILDTRANSACTIONS.map((c, i) => {
                                    return (
                                        <NestedTableRow key={`child-transaction-${i}`} dense={this.state.density} onClick={() => this.handleSelectChild(c)} selected={c.id === this.state.selectedChildId}>
                                            <NestedTableCell dense={this.state.density}></NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width='125px'>
                                                {c.AFFIDAVITNO}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="150px">
                                                {c.POLICYNO}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="240px">
                                                {c.INSUREDNAME !== null ? c.INSUREDNAME : '-'}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="50px">
                                                {c.TYPE}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} align="right" width="125px">
                                                {c.PREMIUM}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="100px" align="center">
                                                {c.INCEPTION}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="100px" align="center">
                                                {c.EXPIRATION !== null ? c.EXPIRATION : '-'}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="100px" align="right">
                                                {c.BATCH}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="75px" align="right">
                                                {c.ITEMNO}
                                            </NestedTableCell>
                                            <NestedTableCell dense={this.state.density} width="70px">
                                                {c.STATE}
                                            </NestedTableCell>
                                        </NestedTableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : null
            )}
            onRowClick={(e, selectedRow, togglePanel) => {this.handleRowClick(selectedRow, selectedRow.tableData.id); togglePanel()}}
            options={{
                headerStyle: {
                    backgroundColor: 'rgba(42, 51, 62, .87)',
                    // fontSize: '16px',
                    '&:hover': {
                        color: 'rgba(255, 255, 255, 0.7)'
                    },
                },
                detailsPanelType: 'single',
                showDetailPanelIcon: true,
                rowStyle: rowData => ({
                    backgroundColor: this.state.selectedRowId === rowData.tableData.id ? 'rgba(217, 239, 205, 0.7)' : undefined
                }),
                padding: this.state.density,
                search: false,
            }}
            components={{
                // Toolbar: props => (
                //     <TableToolbar
                //         {...props}
                //         tableTitle="Affidavit Transactions"
                //         showFilters={this.state.showFilters}
                //         onFilterClick={() => this.setFiltering()}
                //         onDensityClick={this.handleDensityClick}
                //     />
                // )
            }}
        />
        </ThemeProvider>
    )
    }
}  

export default NestedTableExample;