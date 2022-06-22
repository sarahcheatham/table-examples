const Markdown = `
import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { tableTheme } from '@aeros-ui/themes'; 
import { TableIcons } from '@aeros-ui/icons';
import { CurrencyInput, TextInput, RatioInput } from '@aeros-ui/components';
import { Paper } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';

const AddRowExample = () => {
    const theme = useTheme();
    const [data, setData] = useState([
        {
            id: 0,
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

    return (
        <ThemeProvider theme={tableTheme}>
            <Paper sx={{ margin: '1em' }} elevation={4}>
                <MaterialTable
                    title="Add Row Example"
                    columns={columns}
                    data={data}
                    icons={TableIcons}
                    actions={[
                        {
                            icon: TableIcons.Add,
                            tooltip: 'add row',
                            isFreeAction: true,
                            onClick: (event) => {
                                const newRow = {
                                    id: "uuid-" + Math.random() * 100000,
                                    CODEDESCRIPTION: "",
                                    USEXPOSURE: undefined,
                                    TOTALEXPOSURE: undefined,
                                    RATIO: undefined,
                                    TOTALGROSS: undefined,
                                    TONYTAX: undefined,
                                }
                                setData([...data, newRow])
                            }
                        },
                    ]}
                    options={{
                        headerStyle: { backgroundColor: theme.palette.grid.main.header, color: theme.palette.primary.contrastText },
                        search: false,
                        paging: false,
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
        </ThemeProvider>
    )
}

export default AddRowExample;
`;
export default Markdown;