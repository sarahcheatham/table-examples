import { useState } from 'react';
import {
    CurrencyInput,
    TextInput,
    PercentageInput
} from '@aeros-ui/components';
// import PercentageInput from '../PercentageInput';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MaterialTable from '@material-table/core';  
// import TableToolbar from './TableToolbar';
import { 
    TableToolbar, 
    TableFilterInput 
} from '@aeros-ui/tables';
import { ThemeProvider } from '@mui/material/styles';
import tableTheme from '../TableTheme';
import { Typography } from '@mui/material';
// import { tableTheme } from '@aeros-ui/themes'; 
import { ExportCsv, ExportPdf } from '@material-table/exporters';  
// import '../index.css'

const TableWithInputsExample = () => {
    const [checked, setChecked] = useState(false)
    const [data, setData] = useState([
        {
            id: 0,
            NAMEOFCOMPANY: "",
            COMPANYCODE: "",
            TOTALACCEPTED: 0,
            TOTALPREMIUM: 0
        },
        {
            id: 1,
            NAMEOFCOMPANY: "Admitted Companies (if applicable)",
            COMPANYCODE: "",
            TOTALACCEPTED: 0,
            TOTALPREMIUM: 0
        },
    ])

    const columns = [
        {
            title: "Name of Company",
            field: "NAMEOFCOMPANY",
            type: "string",
            render: rowData => {
                return (
                    <TextInput
                        value={rowData.NAMEOFCOMPANY}
                        placeholder="Company Name"
                        width="100%"
                        disabled
                    />
                )
            },
            editComponent: props => {
                return (
                    <TextInput
                        value={props.value}
                        onChange={(e)=> props.onChange(e.target.value)}
                        width="100%"
                    />
                )
            },
            editable: 'always',
            width: '40%'
        },
        {
            title: "Company Code",
            field: "COMPANYCODE",
            type: "string",
            render: rowData => {
                return (
                    <TextInput
                        value={rowData.COMPANYCODE}
                        placeholder="Company Code"
                        width="100%"
                        disabled
                    />
                )
            },
            editComponent: props => {
                return (
                    <TextInput
                        value={props.value}
                        onChange={(e)=> props.onChange(e.target.value)}
                        width="100%"
                    />
                )
            },
            editable: 'always',
            width: '15%'
        },
        {
            title: "Percent of Total Accepted",
            field: "TOTALACCEPTED",
            type: "numeric",
            render: rowData => {
                return (
                    <PercentageInput
                        value={rowData.TOTALACCEPTED}
                        width="100%"
                        disabled
                    />
                )
            },
            editComponent: props => {
                return (
                    <PercentageInput
                        value={props.value}
                        onChange={(e)=> props.onChange(e.target.value)}
                        width="100%"
                    />
                )
            },
            editable: 'always',
            width: '15%',
            align: 'center'
        },
        {
            title: "Total Excess Line Premium",
            field: "TOTALPREMIUM",
            type: "numeric",
            render: rowData => {
                return (
                    <CurrencyInput
                        value={rowData.TOTALPREMIUM}
                        placeholder="0"
                        disabled
                        // width="100%"
                    />
                )
            },
            // type: "currency",
            editComponent: props => {
                return (
                    <CurrencyInput
                        value={props.value}
                        onChange={(e)=> props.onChange(e.target.value)}
                    />
                )
            },
            editable: 'always',
            // align: 'right',
            width: '25%'
        }
    ]

    const handleUpdateRow = (newData, oldData) => {
        console.log("NEW DATA:", newData)
        console.log("OLD DATA:", oldData)
        const dataUpdate = [...data];
        // In dataUpdate, find target
        const target = dataUpdate.find(
          (el) => el.id === oldData.tableData.id
        );
        const index = dataUpdate.indexOf(target);
        console.log("INDEX:", index)
        dataUpdate[index] = newData;
        console.log("DATA UPDATE:", dataUpdate)
        setData([...dataUpdate]);
    }

    return (
        <ThemeProvider theme={tableTheme}>
            <div>
            <MaterialTable
                title="Unauthorized Companies providing Coverage"
                columns={columns}
                data={data}
                // actions={[
                //     {
                //       icon: 'add',
                //       tooltip: 'Add User',
                //       isFreeAction: true,
                //       onClick: (event) => alert("You want to add a new row")
                //     }
                // ]}
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
                }}
                // components={{
                //     Action: props => (
                //         <FormGroup>
                //             <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>} label="Breakdown by premium"/>
                //         </FormGroup>
                //     )
                // }}
                renderSummaryRow={({ column, data }) => {
                    const sum = data.reduce((agg, row) => {
                        console.log("AGG", agg)
                        console.log("ROW:", row)
                        return Number(agg) + Number(row.TOTALPREMIUM), 0
                    })
                    console.log("SUM:", sum)
                    return (
                        column.field === "TOTALACCEPTED"
                        ? {
                            value: <div style={{ display: 'flex', justifyContent: 'space-between'}}><span>Total: </span><span>{data.reduce((agg, row) => Number(agg) + Number(row.TOTALACCEPTED), 0)}%</span></div>,
                            style: { textAlign: 'right', fontSize: '1rem'}
                            }
                        : column.field === "TOTALPREMIUM"
                        ? {
                            // value: data.reduce((agg, row) => agg + row.TOTALPREMIUM, 0),
                            value: <span>${data.reduce((agg, row) => Number(agg) + Number(row.TOTALPREMIUM), 0)}</span>,
                            style: { textAlign: 'right', fontSize: '1rem'}
                            }
                        : undefined
                    )
                }}
                options={{
                    headerStyle: {
                        backgroundColor: 'rgba(42, 51, 62, .87)',
                        color: '#F5F5F5',
                        '&:hover': {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                    },
                    search: false,
                    paging: false
                }}
            /> 
            </div>
        </ThemeProvider>
    )
}

export default TableWithInputsExample;