// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import { useState } from "react";
import MaterialTable from "@material-table/core";  
import { TableToolbar, TableFilterInput, MainTableCell } from "@aeros-ui/tables";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { tableTheme } from "@aeros-ui/themes"; 
import { ExportCsv, ExportPdf } from "@material-table/exporters";  
import CodeContainer from "../../../components/CodeContainer";
import Markdown from './Markdown';

const ToolbarExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
    const [density, setDensity] = useState("dense");
    const [showFilters, setFiltering] = useState(false);
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

    const handleDensityClick = () => {
        density === "normal" ? setDensity("dense") : setDensity("normal")
    };

    const columns = [
        {
            title: "User Id",
            field: "USERID",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.USERID}</MainTableCell>),
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "User Name",
            field: "USERNAME",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.USERNAME}</MainTableCell>),
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Security Profile",
            field: "SECURITYPROFILE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.SECURITYPROFILE}</MainTableCell>),
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Email",
            field: "EMAIL",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EMAIL}</MainTableCell>),
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "Telephone",
            field: "PHONE",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.PHONE}</MainTableCell>),
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        },
        {
            title: "State",
            field: "STATE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.STATE}</MainTableCell>),
            filterComponent: ({ columnDef, onFilterChanged }) => (
                <TableFilterInput onChange={(e) => onFilterChanged(columnDef.tableData.id, e.target.value)}/>
            ),
        }
    ];

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    return (
        <ThemeProvider theme={tableTheme}>
             {/* {process.env.NODE_ENV !== "production" ? (
                <Grid container sx={{ m: "1em" }}>
                    <Grid item>
                        <Button component={Link} to="/table-examples">Back to Home</Button>
                    </Grid>
                </Grid>
            ): null} */}
            <CodeContainer
                title="ToolbarExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                 <div style={{ margin: "1em" }}>
                    <MaterialTable
                        title="Toolbar Example"
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            columnsButton: true,
                            exportAllData: true,
                            exportMenu: [{
                                label: "Export PDF",
                                exportFunc: (cols, datas) => ExportPdf(cols, datas, "Dataset Name")
                            }, {
                                label: "Export CSV",
                                exportFunc: (cols, datas) => ExportCsv(cols, datas, "Dataset Name")
                            }],
                            filtering: showFilters,
                            filterCellStyle: { padding: "0.5em" },
                            padding: density,
                            search: true,
                            searchFieldStyle: { marginRight: "1em" }
                        }}
                        components={{
                            Toolbar: props => (
                                <TableToolbar
                                    {...props}
                                    showFilters={showFilters}
                                    onFilterClick={() => setFiltering(!showFilters)}
                                    onDensityClick={handleDensityClick}
                                />
                            )
                        }}
                    />
                </div>
            )}
        </ThemeProvider>
    )
}

export default ToolbarExample;