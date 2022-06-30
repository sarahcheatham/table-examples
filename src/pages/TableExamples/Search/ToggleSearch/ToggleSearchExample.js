import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { 
    MainTableCell, 
    // FreeActionToolbar 
} from '@aeros-ui/tables';
import TableToolbar from '../../../../TableToolbar';
import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes';  
import { useTheme } from '@mui/material/styles';  
import { Tooltip, Grid, Paper, IconButton } from '@mui/material';
import { PersonOff, HowToReg } from '@mui/icons-material';
import { ExportCsv, ExportPdf } from "@material-table/exporters";  
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';


const ToggleSearchExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
    const [density, setDensity] = useState("dense");
    const [showFilters, setFiltering] = useState(false);
    const [showSearch, setShowSearch] = useState(true)
    const [data, setData] = useState(
        [
            {
                id: 0,
                USERID: "ADM519833",
                USERNAME: "ADMINSITRATOR",
                SECURITYPROFILE: "PETER M. FEENEY",
                EMAIL: "ADMIN@FEENEY.COM",
                PHONE: "800-222-5500",
                STATE: "DISABLED"
            },
            {
                id: 1,
                USERID: "519833A",
                USERNAME: "JANE DOE",
                SECURITYPROFILE: "PETER M. FEENEY",
                EMAIL: "J.DOE@FEENEY.COM",
                PHONE: "800-222-5151",
                STATE: "ENABLED"
            },
            {
                id: 2,
                USERID: "519833B",
                USERNAME: "JOHN SMITH",
                SECURITYPROFILE: "PETER M. FEENEY",
                EMAIL: "ADMIN@FEENEY.COM",
                PHONE: "800-222-5152",
                STATE: "DISABLED"
            },
        ]
    )

    const [columns, setColumns] = useState([
        {
            title: "User Id",
            field: "USERID",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.USERID}</MainTableCell>),
        },
        {
            title: "User Name",
            field: "USERNAME",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.USERNAME}</MainTableCell>),
        },
        {
            title: "Security Profile",
            field: "SECURITYPROFILE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.SECURITYPROFILE}</MainTableCell>),
        },
        {
            title: "Email",
            field: "EMAIL",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EMAIL}</MainTableCell>),
        },
        {
            title: "Telephone",
            field: "PHONE",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.PHONE}</MainTableCell>),
        },
        {
            title: "State",
            field: "STATE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.STATE}</MainTableCell>),
        }
    ]);


    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    const handleDensityClick = () => {
        density === "normal" ? setDensity("dense") : setDensity("normal")
    };

    const handleDisableUsers = (selectedRows, data) => {
        const filteredRows = selectedRows.filter(r => r.STATE !== 'DISABLED')
        const dataCopy = [...data]
        dataCopy.forEach((r, i) => {
            if(r.STATE === "DISABLED"){
                let rowCopy = {...r}
                rowCopy.tableData.checked = false
                dataCopy[rowCopy.tableData.id] = rowCopy
            }
        })
        setData(dataCopy)

        setTimeout(() => alert("You want to disable " + filteredRows.length + " user(s)"), 1000)
    }

    const handleEnableUsers = (selectedRows, data) => {
        const filteredRows = selectedRows.filter(r => r.STATE !== 'ENABLED')
        const dataCopy = [...data]
        dataCopy.forEach((r, i) => {
            if(r.STATE === "ENABLED"){
                let rowCopy = {...r}
                rowCopy.tableData.checked = false
                dataCopy[rowCopy.tableData.id] = rowCopy
            }
        })
        setData(dataCopy)

        setTimeout(() => alert("You want to enable " + filteredRows.length + " user(s)"), 1000)
    }

    // const handleToggleSearch = (bool) => {
    //     setShowSearch(bool)
    // }
    console.log(data)
    return (
        <ThemeProvider theme={tableTheme}>
            <CodeContainer
                title="ConditionalSelectionExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title="Toggle Search Example"
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            selectionProps: rowData => {
                                console.log(rowData)
                                return (
                                    {
                                        style: { paddingLeft: '1.25em' },
                                    }
                                )
                            },
                            selection: true,
                            showTextRowsSelected: false,
                            filtering: showFilters,
                            filterCellStyle: { padding: "0.5em" },
                            padding: density,
                            search: showSearch,
                            columnsButton: true,
                            exportAllData: true,
                            exportMenu: [{
                                label: "Export PDF",
                                exportFunc: (cols, datas) => ExportPdf(cols, datas, "Dataset Name")
                            }, {
                                label: "Export CSV",
                                exportFunc: (cols, datas) => ExportCsv(cols, datas, "Dataset Name")
                            }],
                            rowStyle: rowData => ({
                                backgroundColor: rowData.tableData.hasOwnProperty('checked') && rowData.tableData.checked ? theme.palette.grid.main.active : undefined
                            }),
                        }}
                        components={{
                            Container: props => {
                                return (
                                    <Paper elevation={0} {...props}/>
                                )
                            },
                            Toolbar: props => {
                                return (
                                    <TableToolbar
                                        {...props}
                                        showFilters={showFilters}
                                        onFilterClick={() => setFiltering(!showFilters)}
                                        onDensityClick={handleDensityClick}
                                        // handleToggleSearch={handleToggleSearch}
                                        freeAction={
                                            <>
                                                <Grid item>
                                                    <Tooltip title="Disable User(s)">
                                                    <span>
                                                        <IconButton 
                                                            size="small" 
                                                            onClick={(e) => handleDisableUsers(props.selectedRows, props.data)} 
                                                            disabled={props.selectedRows.length === 0}
                                                        >
                                                            <PersonOff/>
                                                        </IconButton>
                                                    </span>
                                                    </Tooltip>
                                                </Grid>
                                                <Grid item>
                                                    <Tooltip title="Enable User(s)">
                                                    <span>
                                                        <IconButton 
                                                            size="small" 
                                                            onClick={(e) => handleEnableUsers(props.selectedRows, props.data)} 
                                                            disabled={props.selectedRows.length === 0}
                                                        >
                                                            <HowToReg/>
                                                        </IconButton>
                                                    </span>
                                                    </Tooltip>
                                                </Grid>
                                            </>
                                        }
                                    />
                                )
                            },
                        }}
                    />
                </Paper>
            )}
        </ThemeProvider>
    )
}

export default ToggleSearchExample;