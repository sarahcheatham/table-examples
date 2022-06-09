// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MaterialTable from '@material-table/core';  
import { MainTableCell } from '@aeros-ui/tables';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes'; 
import CodeContainer from "../../../components/CodeContainer";
import Markdown from './Markdown';

const SingleSelectionExample = () => {
    const theme = useTheme();
    const [showCode, setShowCode] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState(
        [
            {
                id: 0,
                TYPE: "DECLARATION",
                AFFIDAVITNO: "1510269",
                POLICYNO: "CPL31094570",
                INSUREDNAME: "GLENN GUBNER",
                PREMIUM: "712",
                INCEPTION: "10/20/2021",
                EXPIRATION: "10/20/2022"
            },
            {
                id: 1,
                TYPE: "DECLARATION",
                AFFIDAVITNO: "1522073",
                POLICYNO: "CCP1021941",
                INSUREDNAME: "SHOE BOX CITY, INC",
                PREMIUM: "15000",
                INCEPTION: "10/18/2021",
                EXPIRATION: "10/18/2022"
            },
            {
                id: 2,
                TYPE: "DECLARATION",
                AFFIDAVITNO: "15311259",
                POLICYNO: "WH01569",
                INSUREDNAME: "175-57, LLC R & A INTERNATIONAL TRADING",
                PREMIUM: "26986",
                INCEPTION: "10/20/2021",
                EXPIRATION: "10/20/2022"
            },
            {
                id: 3,
                TYPE: "DECLARATION",
                AFFIDAVITNO: "153197",
                POLICYNO: "MP0031007000319",
                INSUREDNAME: "175-57, LLC R & A INTERNATIONAL TRADING",
                PREMIUM: "26986",
                INCEPTION: "10/20/2021",
                EXPIRATION: "10/20/2022"
            },
        ]
    );
    const [columns, setColumns] = useState([
        {
            title: "Type",
            field: "TYPE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.TYPE}</MainTableCell>)
        },
        {
            title: "Affidavit No",
            field: "AFFIDAVITNO",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.AFFIDAVITNO}</MainTableCell>)
        },
        {
            title: "Policy No",
            field: "POLICYNO",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.POLICYNO}</MainTableCell>)
        },
        {
            title: "Insured Name",
            field: "INSUREDNAME",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.INSUREDNAME}</MainTableCell>)
        },
        {
            title: "Premium",
            field: "PREMIUM",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.PREMIUM}</MainTableCell>)
        },
        {
            title: "Inception",
            field: "INCEPTION",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.INCEPTION}</MainTableCell>)
        },
        {
            title: "Expiration",
            field: "EXPIRATION",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EXPIRATION}</MainTableCell>)
        }
    ])

    const handleRowSelect = (e, rowData) => {
        if(selectedRow !== null && rowData.tableData.id === selectedRow.tableData.id){
            setSelectedRow(null)
        } else {
            setSelectedRow(rowData)
        }
    };

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    return (
        <ThemeProvider theme={tableTheme}>
            {/* {process.env.NODE_ENV !== 'production' ? (
                <Grid container sx={{ m: '1em' }}>
                    <Grid item>
                        <Button component={Link} to="/table-examples">Back to Home</Button>
                    </Grid>
                </Grid>
            ): null} */}
            <CodeContainer
                title="SingleSelectionExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <div style={{margin: '1em' }}>
                    <MaterialTable
                        title={null}
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header, paddingRight: '0.25em' },
                            toolbar: false,
                            padding: "dense",
                            search: false,
                            rowStyle: rowData => ({
                                backgroundColor: selectedRow !== null && selectedRow.tableData.id === rowData.tableData.id ? theme.palette.grid.main.active : undefined
                            }),
                        }}
                        onRowClick={(e, selectedRow) => handleRowSelect(e, selectedRow)}
                        actions={[ 
                            {
                                icon: 'check',
                                onClick: (e, rowData) => handleRowSelect(e, rowData)
                            }
                        ]}
                        components={{
                            Action: props => (
                                <Checkbox
                                    onChange={(e) => props.action.onClick(e, props.data)}
                                    checked={selectedRow !== null && selectedRow.tableData.id === props.data.tableData.id}
                                    size="small"
                                />
                            ),
                        }}
                    />
                </div>
            )}
        </ThemeProvider>
    )
}

export default SingleSelectionExample;