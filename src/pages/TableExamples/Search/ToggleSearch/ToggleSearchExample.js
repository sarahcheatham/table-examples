import { Component, createRef } from 'react';
import MaterialTable from '@material-table/core';  
import { 
    MainTableCell, 
    FreeActionToolbar 
} from '@aeros-ui/tables';
// import TableToolbar from '../../../../TableToolbar';
// import FreeActionToolbar from '../../../../FreeActionToolbar';
import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes';   
import { Tooltip, Grid, Paper, IconButton } from '@mui/material';
import { PersonOff, HowToReg } from '@mui/icons-material';
import { ExportCsv, ExportPdf } from "@material-table/exporters";  
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';


class ToggleSearchExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCode: false,
            density: 'dense',
            showFilters: false,
            showSearch: true,
            loading: false,
            data: [
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
        }
        this.tableRef = createRef()
    }

    columns = [
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
        },
        
    ]

    componentDidUpdate(prevProps, prevState){
        if(prevState.loading !== this.state.loading && this.state.loading){
            console.log("COMPONENT DID UPDATE TABLE REF:", this.tableRef.current)
            console.log("COMPONENT DID UPDATE DATA:", this.state.data)
            this.handleResetTable(this.state.data)
        }
    }

    handleToggleCode = () => {
        this.setState({ showCode: !this.state.showCode })
    };

    handleDensityClick = () => {
        let density;
        this.state.density === "normal" ? density = "dense" : density = "normal";
        this.setState({ density })
    };

    handleToggleFilters = () => {
        this.setState({ showFilters: !this.state.showFilters })
    }

    handleDisableUsers = (selectedRows, data) => {
        console.log("DATA", data)
        // const filteredRows = selectedRows.filter(r => r.STATE !== 'DISABLED')
        const dataCopy = [...data]
        dataCopy.forEach((r, i) => {
            if(r.STATE === "DISABLED"){
                let rowCopy = {...r}
                rowCopy.tableData.checked = false
                dataCopy[rowCopy.tableData.id] = rowCopy
            }
        })
        this.setState({ data: dataCopy })

        setTimeout(() => this.setState({ loading: true }), 1000)
    }

    handleEnableUsers = (selectedRows, data) => {
        const filteredRows = selectedRows.filter(r => r.STATE !== 'ENABLED')
        console.log("FILTERED ROWS:", filteredRows)
        const dataCopy = [...data]
        dataCopy.forEach((r, i) => {
            if(r.STATE === "ENABLED"){
                let rowCopy = {...r}
                rowCopy.tableData.checked = false
                dataCopy[rowCopy.tableData.id] = rowCopy
            }
        })
        this.setState({ data: dataCopy })

        setTimeout(() => this.setState({ loading: true }), 1000)
    }

    handleResetTable = data => {
        console.log(this.tableRef.current)
        console.log("DATA:", data)
        const dataCopy = [...data];
        dataCopy.forEach(r => {
            let rowCopy = {...r}
            rowCopy.tableData.checked = false;
            dataCopy[rowCopy.tableData.id] = rowCopy
        })
        setTimeout(() => this.setState({ loading: false, data: dataCopy }), 1000)
    }

    handleToggleSearch = () => {
        if(this.tableRef.current){
            let showSearch;
            if(this.tableRef.current.state.selectedCount > 0){
                showSearch = false
            } else {
                showSearch = true
            }
            this.setState({ showSearch })
        }
    }

    render(){
        return (
            <ThemeProvider theme={tableTheme}>
                <CodeContainer
                    title="ConditionalSelectionExample.js"
                    codeString={Markdown}
                    showCode={this.state.showCode}
                    handleToggleCode={() => this.handleToggleCode()}
                />
                {!this.state.showCode && (
                    <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                        <MaterialTable
                            title="Toggle Search Example"
                            tableRef={this.tableRef}
                            columns={this.columns}
                            data={this.state.data}
                            isLoading={this.state.loading}
                            options={{
                                headerStyle: { backgroundColor: tableTheme.palette.grid.main.header },
                                selectionProps: () => ({
                                    style: { paddingLeft: '1.25em' }
                                }),
                                selection: true,
                                showTextRowsSelected: false,
                                filtering: this.state.showFilters,
                                filterCellStyle: { padding: "0.5em" },
                                padding: this.state.density,
                                search: true,
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
                                    backgroundColor: rowData.tableData.hasOwnProperty('checked') && rowData.tableData.checked ? tableTheme.palette.grid.main.active : undefined
                                }),
                            }}
                            // onSelectionChange={(rows) => this.handleToggleSearch(rows)}
                            components={{
                                Container: props => {
                                    return (
                                        <Paper elevation={0} {...props}/>
                                    )
                                },
                                Toolbar: props => {
                                    return (
                                        <FreeActionToolbar
                                            {...props}
                                            showFilters={this.state.showFilters}
                                            onFilterClick={this.handleToggleFilters}
                                            onDensityClick={this.handleDensityClick}
                                            // handleToggleSearch={this.handleToggleSearch}
                                            freeAction={
                                                <>
                                                    <Grid item>
                                                        <Tooltip title="Disable User(s)">
                                                        <span>
                                                            <IconButton 
                                                                size="small" 
                                                                onClick={(e) => this.handleDisableUsers(props.selectedRows, props.data)} 
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
                                                                onClick={(e) => this.handleEnableUsers(props.selectedRows, props.data)} 
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
    
}

export default ToggleSearchExample;