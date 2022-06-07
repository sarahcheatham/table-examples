import { useState } from 'react';  
import { useTheme } from '@mui/material/styles';  
import MaterialTable from '@material-table/core';  
import TableContainer from '@mui/material/TableContainer'; 
import Table from '@mui/material/Table';   
import TableBody from '@mui/material/TableBody';  
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { TableIcons } from '@aeros-ui/icons';
import { TableToolbar, NestedTableHeader, NestedTableRow, MainTableCell, NestedTableCell } from '@aeros-ui/tables'; 
import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes';

const NestedTableExample = () => {
    const theme = useTheme()
    const [density, setDensity] = useState('dense');
    const [showFilters, setFiltering] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedChildId, setSelectedChildId] = useState(null);
    const [data, setData] = useState([
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
                    PREMIUM: '100',
                    INCEPTION: '05/20/2022',
                    EXPIRATION: null,
                    BATCH: 4201525,
                    ITEMNO: 2,
                    STATE: null
                },
            ] 
        }
    ])
    
    
    const handleRowClick = (row, rowId) => {
        closeRow();
        const rowCopy = {...row};
        const dataCopy = [...data]
        dataCopy[rowCopy.tableData.id] = rowCopy;
        setSelectedRowId(rowId)
        setSelectedRow(rowCopy)
        setData(dataCopy)
    }

    const handleDensityClick = () => {
        density === 'normal' ? setDensity('dense') : setDensity('normal')
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
        setSelectedRowId(null)
        setSelectedRow(null)
        setSelectedChildId(null)
    }

    const columns = [
        {
            title: "Affidavit No",
            field: "AFFIDAVITNO",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.AFFIDAVITNO}</MainTableCell>
            },
            width: '125px'
        },
        {
            title: "Policy No",
            field: "POLICY NO",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.POLICYNO}</MainTableCell>
            },
            width: '150px'
        },
        {
            title: "Insured Name",
            field: "INSUREDNAME",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.INSUREDNAME}</MainTableCell>
            },
            width: '200px'
        },
        {
            title: "Type",
            field: "TYPE",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.TYPE}</MainTableCell>
            },
            width: '50px'
        },
        {
            title: "Premium",
            field: "PREMIUM",
            type: "currency",
            render: rowData => {
                return <MainTableCell>{rowData.PREMIUM}</MainTableCell>
            },
            width: '125px'
        },
        {
            title: "Inception",
            field: "INCEPTION",
            type: "date",
            render: rowData => {
                return <MainTableCell>{rowData.INCEPTION}</MainTableCell>
            },
            width: '100px'
        },
        {
            title: "Expiration",
            field: "EXPIRATION",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.EXPIRATION}</MainTableCell>
            },
            width: '100px',
        },
        {
            title: "Batch",
            field: "BATCH",
            type: "numeric",
            render: rowData => {
                return <MainTableCell>{rowData.BATCH}</MainTableCell>
            },
            width: '100px'
        },
        {
            title: "Item",
            field: "ITEMNO",
            type: "numeric",
            render: rowData => {
                return <MainTableCell>{rowData.ITEMNO}</MainTableCell>
            },
            width: '50px',
        },
        {
            title: "State",
            field: "STATE",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.STATE}</MainTableCell>
            },
            width: '50px',
        },
    ]

    const tableSubheaders = ["Related Child Transactions"]

    const handleSelectChild = rowData => {
        setSelectedChildId(rowData.id)
    }

    return (
        <ThemeProvider theme={tableTheme}>
            {process.env.NODE_ENV !== 'production' ? (
                <Grid container sx={{ m: '1em' }}>
                    <Grid item>
                        <Button component={Link} to="/table-examples">Back to Home</Button>
                    </Grid>
                </Grid>
            ): null}
            <div style={{ margin: '1em'}}>
                <MaterialTable
                    title={null}
                    columns={columns}
                    data={data}
                    icons={TableIcons}
                    detailPanel={({ rowData }) => (
                        rowData.CHILDTRANSACTIONS.length > 0 ? (
                            <TableContainer>
                                <Table>
                                    <NestedTableHeader
                                        tableSubheaders={tableSubheaders}
                                        colSpan={columns.length + 1}
                                        dense={density}
                                    />
                                    <TableBody>
                                        {rowData.CHILDTRANSACTIONS.map((c, i) => {
                                            return (
                                                <NestedTableRow 
                                                    key={`child-transaction-${i}`} 
                                                    dense={density} 
                                                    onClick={() => handleSelectChild(c)} 
                                                    selected={c.id === selectedChildId}
                                                >
                                                    <NestedTableCell dense={density}></NestedTableCell>
                                                    <NestedTableCell dense={density} width='125px'>
                                                        {c.AFFIDAVITNO}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="150px">
                                                        {c.POLICYNO}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="240px">
                                                        {c.INSUREDNAME !== null ? c.INSUREDNAME : '-'}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="50px">
                                                        {c.TYPE}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} align="right" width="125px">
                                                        {c.PREMIUM}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="100px" align="center">
                                                        {c.INCEPTION}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="100px" align="center">
                                                        {c.EXPIRATION !== null ? c.EXPIRATION : '-'}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="100px" align="right">
                                                        {c.BATCH}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="75px" align="right">
                                                        {c.ITEMNO}
                                                    </NestedTableCell>
                                                    <NestedTableCell dense={density} width="70px">
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
                    onRowClick={(e, selectedRow, togglePanel) => {handleRowClick(selectedRow, selectedRow.tableData.id); togglePanel()}}
                    options={{
                        headerStyle: {
                            backgroundColor: theme.palette.grid.main.header,
                            '&:hover': {
                                opacity: 0.5
                            },
                        },
                        detailsPanelType: 'single',
                        showDetailPanelIcon: true,
                        rowStyle: rowData => ({
                            backgroundColor: selectedRowId === rowData.tableData.id ? theme.palette.grid.main.active : undefined
                        }),
                        padding: density,
                        search: false,
                    }}
                    components={{
                        Toolbar: props => (
                            <TableToolbar
                                {...props}
                                tableTitle="Affidavit Transactions"
                                showFilters={showFilters}
                                onFilterClick={() => setFiltering(!showFilters)}
                                onDensityClick={handleDensityClick}
                            />
                        )
                    }}
                />
            </div>
        </ThemeProvider>
    )
}  

export default NestedTableExample;