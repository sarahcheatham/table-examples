import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
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

const SingleSelectionExample = () => {
    const [density, setDensity] = useState('dense');
    const [showFilters, setFiltering] = useState(false);
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

    const handleRowSelect = (e, rowData) => {
        console.log("ROW DATA:", rowData)
        if(selectedRow !== null && rowData.tableData.id === selectedRow.tableData.id){
            setSelectedRow(null)
        } else {
            setSelectedRow(rowData)
        }
    }

    return (
        <ThemeProvider theme={tableTheme}>
            <div style={{margin: '1em' }}>
            <MaterialTable
                title={null}
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
                }}
                actions={[ 
                    {
                        icon: 'check',
                        onClick: (e, rowData) => handleRowSelect(e, rowData)
                    }
                ]}
                onSelectionChange={(rows) => console.log(rows)}
                components={{
                    Toolbar: props => (
                        <TableToolbar
                            {...props}
                            showFilters={showFilters}
                            onFilterClick={() => setFiltering(!showFilters)}
                            onDensityClick={handleDensityClick}
                        />
                    ),
                    Action: props => (
                        <Checkbox
                            onChange={(e) => props.action.onClick(e, props.data)}
                            checked={selectedRow !== null && selectedRow.tableData.id === props.data.tableData.id}
                            size="small"
                            required
                        />
                    ),
                    Header: props => {
                        console.log("PROPS:", props)
                        return (
                            <MTableHeader {...props}/>
                        )
                    }
                }}
            />
            </div>
        </ThemeProvider>
    )
}

export default SingleSelectionExample;