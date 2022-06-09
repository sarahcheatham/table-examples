import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { tableTheme } from '@aeros-ui/themes'; 
import { TableIcons } from '@aeros-ui/icons';
import { CurrencyInput, TextInput, PercentageInput } from '@aeros-ui/components';
import { Grid, Paper, Typography} from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import CodeContainer from "../../../components/CodeContainer";
import Markdown from './Markdown';

const EditExample = () => {
    const theme = useTheme();
    const [showCode, setShowCode] = useState(false);
    const [data, setData] = useState([
        {
            id: 0,
            NAMEOFCOMPANY: "",
            COMPANYCODE: "",
            TOTALACCEPTED: '0',
            TOTALPREMIUM: undefined
        },
        {
            id: 1,
            NAMEOFCOMPANY: "Admitted Companies (if applicable)",
            COMPANYCODE: "",
            TOTALACCEPTED: '0',
            TOTALPREMIUM: undefined
        },
    ])

    const columns = [
        {
            title: "Name of Company",
            field: "NAMEOFCOMPANY",
            type: "string",
            render: rowData => (<TextInput value={rowData.NAMEOFCOMPANY} placeholder="Company Name" width="100%" disabled/>),
            editComponent: props => (<TextInput value={props.value} placeholder="Company Name" width="100%" onChange={(e) => props.onChange(e.target.value)}/>),
            editable: 'always',
            width: '40%',
            initialEditValue: '',
            sorting: false
        },
        {
            title: "Company Code",
            field: "COMPANYCODE",
            type: "string",
            render: rowData => (<TextInput value={rowData.COMPANYCODE} placeholder="Company Code" width="100%" disabled/>),
            editComponent: props => (<TextInput value={props.value} placeholder="Company Code" width="100%" onChange={(e) => props.onChange(e.target.value)}/>),
            editable: 'never',
            width: '15%',
            initialEditValue: '',
            sorting: false
        },
        {
            title: "Percent of Total Accepted",
            field: "TOTALACCEPTED",
            type: "numeric",
            render: rowData => (<PercentageInput value={rowData.TOTALACCEPTED} disabled/>),
            editComponent: props => (<PercentageInput value={props.value} onChange={(e) => props.onChange(e.target.value)}/>),
            editable: 'always',
            width: '15%',
            initialEditValue: '0',
            sorting: false
        },
        {
            title: "Total Excess Line Premium",
            field: "TOTALPREMIUM",
            type: "numeric",
            render: rowData => (<CurrencyInput value={rowData.TOTALPREMIUM} placeholder="0" disabled/>),
            editComponent: props => (<CurrencyInput value={props.value} onChange={(e, value) => props.onChange(value)}/>),
            editable: 'always',
            width: '25%',
            initialEditValue: undefined,
            sorting: false
        }
    ]

    const handleUpdateRow = (newData, oldData) => {
        const dataUpdate = [...data];
        const target = dataUpdate.find((el) => el.id === oldData.tableData.id);
        const index = dataUpdate.indexOf(target);
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
    }

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
                title="EditExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ margin: '1em' }} elevation={4}>
                <MaterialTable
                    title="Unauthorized Companies providing Coverage"
                    columns={columns}
                    data={data}
                    icons={TableIcons}
                    editable={{
                        onRowAdd: (newData) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                newData.id = "uuid-" + Math.random() * 10000000;
                                setData([...data, newData]);
                                resolve();
                                }, 1000);
                            });
                        },
                        onRowUpdate: (newData, oldData) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                handleUpdateRow(newData, oldData)
                                resolve();
                                }, 1000);
                            });
                        },
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
                        isDeleteHidden: rowData => rowData.tableData.index === 1  
                    }}
                    renderSummaryRow={({ column, data }) => {
                        return (
                            column.field === 'COMPANYCODE' ? {
                                value: <Typography variant="subtitle2" align="right" sx={{ textTransform: 'none', pt: '1em' }}>Total:</Typography>,
                            }
                            : column.field === "TOTALACCEPTED"
                            ? {
                                value:
                                <span> 
                                    <PercentageInput
                                        value={data.reduce((agg, row) => agg + Number(row.TOTALACCEPTED), 0)}
                                        disabled
                                        width="100%"
                                    />
                                </span>,
                                style: { textAlign: 'right', fontSize: '1rem'}
                            }
                            : column.field === "TOTALPREMIUM"
                            ? {
                                value: <span>
                                    <CurrencyInput
                                        disabled
                                        value={data.reduce((agg, row) => row.TOTALPREMIUM === undefined ? agg + 0 : agg + row.TOTALPREMIUM, 0).toFixed(2)}
                                    />
                                </span>,
                                style: { textAlign: 'right', fontSize: '1rem'}
                            }
                            : undefined
                        )
                    }}
                    options={{
                        headerStyle: { backgroundColor: theme.palette.grid.main.header, color: theme.palette.primary.contrastText },
                        search: false,
                        paging: false,
                        addRowPosition: 'first',
                        actionsColumnIndex: -1,
                    }}
                    components={{
                        Container: props => {
                            return (
                                <Paper elevation={0} {...props}/>
                            )
                        }
                    }}
                /> 
                <Grid 
                    item 
                    container 
                    justifyContent="flex-end" 
                    alignItems="flex-end" 
                    spacing={6} 
                    sx={{ pr: '6em', py: '1em' }}
                >
                    <Grid item><Typography variant="subtitle2" align="right">Premium Allocated to New York:</Typography></Grid>
                    <Grid item>
                        <CurrencyInput
                            disabled
                            value={data.reduce((agg, row) => row.TOTALPREMIUM === undefined ? agg + 0 : agg + row.TOTALPREMIUM, 0).toFixed(2)}
                        />
                    </Grid>
                </Grid>
                </Paper>
            )}
        </ThemeProvider>
    )
}

export default EditExample;