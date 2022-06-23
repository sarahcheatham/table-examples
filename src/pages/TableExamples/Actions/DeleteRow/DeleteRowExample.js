import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { tableTheme } from '@aeros-ui/themes'; 
import { TableIcons } from '@aeros-ui/icons';
import { CurrencyInput, TextInput, RatioInput } from '@aeros-ui/components';
import { Grid, Paper } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';

const DeleteRowExample = () => {
    const theme = useTheme();
    const [showCode, setShowCode] = useState(false);
    const [data, setData] = useState([
        {
            id: 0,
            CODEDESCRIPTION: "",
            USEXPOSURE: undefined,
            TOTALEXPOSURE: undefined,
            RATIO: undefined,
            TOTALGROSS: undefined,
            TONYTAX: undefined,
        },
        {
            id: 1,
            CODEDESCRIPTION: "",
            USEXPOSURE: undefined,
            TOTALEXPOSURE: undefined,
            RATIO: undefined,
            TOTALGROSS: undefined,
            TONYTAX: undefined,
        },
        {
            id: 2,
            CODEDESCRIPTION: "",
            USEXPOSURE: undefined,
            TOTALEXPOSURE: undefined,
            RATIO: undefined,
            TOTALGROSS: undefined,
            TONYTAX: undefined,
        }
    ])

    const [columns, setColumns] = useState([
        {
            title: "ELANY Statistical Code & Description",
            field: "CODEDESCRIPTION",
            type: "string",
            render: rowData => (<TextInput value={rowData.CODEDESCRIPTION} placeholder="Coverage Description" width="100%" disabled/>),
            width: '25%',
            sorting: false
        },
        {
            title: "US Exposure",
            field: "USEXPOSURE",
            type: "numeric",
            render: rowData => (<CurrencyInput value={rowData.USEXPOSURE} placeholder="0" disabled/>),
            width: '15%',
            sorting: false,
        },
        {
            title: "Total Amount of Exposure",
            field: "TOTALEXPOSURE",
            type: "numeric",
            render: rowData => (<CurrencyInput value={rowData.TOTALEXPOSURE} placeholder="0" disabled/>),
            width: '15%',
            sorting: false
        },
        {
            title: "Ratio",
            field: "RATIO",
            type: "numeric",
            render: rowData => (<RatioInput value={rowData.RATIO} disabled/>),
            width: '10%',
            sorting: false
        },
        {
            title: "Total Gross Policy Premium",
            field: "TOTALGROSS",
            type: "numeric",
            render: rowData => (<CurrencyInput value={rowData.TOTALGROSS} placeholder="0" disabled/>),
            width: '15%',
            sorting: false
        },
        {
            title: "Taxes Due to New York",
            field: "TONYTAX",
            type: "numeric",
            render: rowData => (<CurrencyInput value={rowData.TONYTAX} placeholder="0" disabled/>),
            width: '15%',
            sorting: false
        }
    ])

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    return (
        <ThemeProvider theme={tableTheme}>
            <CodeContainer
                title="AddRowExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title="Delete Row Example"
                        columns={columns}
                        data={data}
                        icons={TableIcons}
                        editable={{
                            onRowDelete: oldData => {
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const dataDelete = [...data];
                                        const index = oldData.tableData.id;
                                        dataDelete.splice(index, 1);
                                        setData([...dataDelete]);
                                        
                                        resolve()
                                    }, 1000);
                                });
                            },
                        }}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header, color: theme.palette.primary.contrastText },
                            search: false,
                            paging: false,
                            actionsColumnIndex: -1,
                            actionsCellStyle: { paddingLeft: '1em' }
                        }}
                        components={{
                            Container: props => {
                                return (
                                    <Paper elevation={0} {...props}/>
                                )
                            },
                        }}
                    /> 
                </Paper>
            )}
        </ThemeProvider>
    )
}

export default DeleteRowExample;