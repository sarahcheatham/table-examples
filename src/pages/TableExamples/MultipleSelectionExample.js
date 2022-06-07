import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MaterialTable, { MTableHeader, MTableActions } from '@material-table/core';  
import { 
    TableToolbar, 
    TableFilterInput,
    MainTableCell
} from '@aeros-ui/tables';
import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes'; 
import { ExportCsv, ExportPdf } from '@material-table/exporters';  
import { TableIcons } from '@aeros-ui/icons';

const MultipleSelectionExample = () => {
    const [density, setDensity] = useState('dense');
    const [showFilters, setFiltering] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
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
    )

    const handleDensityClick = () => {
        density === 'normal' ? setDensity('dense') : setDensity('normal')
    };

    const columns = [
        {
            title: "Type",
            field: "TYPE",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.TYPE}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        },
        {
            title: "Affidavit No",
            field: "AFFIDAVITNO",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.AFFIDAVITNO}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        },
        {
            title: "Policy No",
            field: "POLICYNO",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.POLICYNO}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        },
        {
            title: "Insured Name",
            field: "INSUREDNAME",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.INSUREDNAME}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        },
        {
            title: "Premium",
            field: "PREMIUM",
            type: "numeric",
            render: rowData => {
                return <MainTableCell>{rowData.PREMIUM}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        },
        {
            title: "Inception",
            field: "INCEPTION",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.INCEPTION}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        },
        {
            title: "Expiration",
            field: "EXPIRATION",
            type: "string",
            render: rowData => {
                return <MainTableCell>{rowData.EXPIRATION}</MainTableCell>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
            },
        }
    ];

    const handleSelectedRows = (rows) => {
        setSelectedRows(rows)
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
            <div style={{margin: '1em' }}>
            <MaterialTable
                title={null}
                icons={TableIcons}
                columns={columns}
                data={data}
                options={{
                    headerStyle: {
                        backgroundColor: 'rgba(42, 51, 62, .87)',
                        '&:hover': {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                    },
                    columnsButton: true,
                    exportAllData: true,
                    exportMenu: [{
                        label: 'Export PDF',
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, 'Dataset Name')
                    }, {
                        label: 'Export CSV',
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, 'Dataset Name')
                    }],
                    filtering: showFilters,
                    filterCellStyle: { padding: '0.5em' },
                    padding: density,
                    search: true,
                    searchFieldStyle: { marginRight: '1em' },
                    selection: true,
                    showTextRowsSelected: false
                }}
                onSelectionChange={(rows) => handleSelectedRows(rows)}
                components={{
                    Toolbar: props => (
                        <TableToolbar
                            {...props}
                            showFilters={showFilters}
                            onFilterClick={() => setFiltering(!showFilters)}
                            onDensityClick={handleDensityClick}
                        />
                    ),
                }}
            />
            </div>
        </ThemeProvider>
    )
}

export default MultipleSelectionExample;