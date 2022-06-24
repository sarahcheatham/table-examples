import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { MainTableCell } from '@aeros-ui/tables';
import TableToolbar from '../../../../TableToolbar';
import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes';  
import { useTheme } from '@mui/material/styles';  
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import PersonOff from '@mui/icons-material/PersonOff'
import { Edit, AttachFile, Print, DeleteForever, Info, MoreVert } from "@mui/icons-material";
import { ExportCsv, ExportPdf } from "@material-table/exporters";  
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';

const popoverList = [
    {
        name: 'Edit',
        icon: <Edit fontSize="small"/>
    },
    {
        name: 'Attach',
        icon: <AttachFile fontSize="small"/>
    },
    {
        name: "Print",
        icon: <Print fontSize="small"/>
    },
    {
        name: 'Delete',
        icon: <DeleteForever fontSize="small"/>
    }
]

const FreeActionExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
    const [density, setDensity] = useState("dense");
    const [showFilters, setFiltering] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [data, setData] = useState(
        [
            {
                id: 0,
                USERID: "ADM519833",
                USERNAME: "ADMINSITRATOR",
                SECURITYPROFILE: "PETER M. FEENEY",
                EMAIL: "ADMIN@FEENEY.COM",
                PHONE: "800-222-5500",
                STATE: "ENABLED"
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
                STATE: "ENABLED"
            },
        ]
    )

    const columns = [
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
    ];


    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    const handleDensityClick = () => {
        density === "normal" ? setDensity("dense") : setDensity("normal")
    };

    const handleDisableUsers = selectedRows => {
        console.log("SELECTED ROWS:", selectedRows)
        alert("You want to disable " + selectedRows.length + " user(s)")
    }

    const handleSelectedRows = (rows) => {
        setSelectedRows(rows)
    };

    return (
        <ThemeProvider theme={tableTheme}>
            <CodeContainer
                title="FreeActionExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title="Free Action Example"
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            selectionProps: () => ({
                                style: { paddingLeft: '1.25em' }
                            }),
                            selection: true,
                            showTextRowsSelected: false,
                            filtering: showFilters,
                            filterCellStyle: { padding: "0.5em" },
                            padding: density,
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
                                backgroundColor: rowData.tableData.hasOwnProperty('checked') && rowData.tableData.checked ? theme.palette.grid.main.active : undefined
                            }),
                        }}
                        onSelectionChange={(rows) => handleSelectedRows(rows)}
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
                                        freeActionDisabled={props.selectedRows.length === 0}
                                        freeActionIcon={<PersonOff/>}
                                        freeActionTooltip="Disable User(s)"
                                        onFreeActionClick={(e) => handleDisableUsers(props.selectedRows)}
                                    />
                                )
                                
                            },
                        }}
                        // actions={[
                        //     {
                        //         icon: PersonOff,
                        //         tooltip: 'disable user(s)',
                        //         isFreeAction: true,
                        //         onClick: (e, rows) => handleDisableUsers(rows)
                        //     }
                        // ]}
                    />
                </Paper>
            )}
        </ThemeProvider>
    )
}

export default FreeActionExample;