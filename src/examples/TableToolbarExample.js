import { useState } from 'react';
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
import '../index.css'

const TableToolbarExample = () => {
    const [density, setDensity] = useState('dense');
    const [showFilters, setFiltering] = useState(false);
    const [data, setData] = useState(
        [
            {
                firstName: "Patrick",
                lastName: "Langenbach",
                birthYear: 1987,
            },
            {
                firstName: "Sarah",
                lastName: "Cheatham",
                birthYear: 2017,
            }
        ]
    )

    const handleDensityClick = () => {
        density === 'normal' ? setDensity('dense') : setDensity('normal')
    };

    const columns = [
        {
            title: "First Name",
            field: "firstName",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.firstName}</Typography>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
              }
        },
        {
            title: "Last Name",
            field: "lastName",
            type: "string",
            render: rowData => {
                return <Typography variant="body2">{rowData.lastName}</Typography>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
              }
        },
        {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
            render: rowData => {
                return <Typography variant="body2">{rowData.birthYear}</Typography>
            },
            filterComponent: ({ columnDef, onFilterChanged }) => {
                return (
                  <TableFilterInput
                    onChange={(e) =>
                      onFilterChanged(columnDef.tableData.id, e.target.value)
                    }
                  />
                );
              }
        }
    ]

    return (
        <ThemeProvider theme={tableTheme}>
            <div>
            <MaterialTable
                title={null}
                columns={columns}
                data={data}
                options={{
                    headerStyle: {
                        backgroundColor: 'rgba(42, 51, 62, .87)',
                        // fontSize: '16px',
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
                    headerStyle: {
                        backgroundColor: 'rgba(42, 51, 62, .87)',
                    },
                    padding: density,
                    search: true,
                    searchFieldStyle: { marginRight: '1em' }
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

export default TableToolbarExample;