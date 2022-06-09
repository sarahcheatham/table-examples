// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { MainTableCell } from '@aeros-ui/tables';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes';  
import { TableIcons } from '@aeros-ui/icons';
import CodeContainer from "../../../components/CodeContainer";
import Markdown from './Markdown';

const MultipleSelectionExample = () => {
    const theme = useTheme();
    const [showCode, setShowCode] = useState(false);
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
    );

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

    const handleSelectedRows = (rows) => {
        setSelectedRows(rows)
    };

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
                title="MultipleSelectionExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <div style={{ margin: '1em' }}>
                    <MaterialTable
                        title={null}
                        icons={TableIcons}
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            selectionProps: () => ({
                                style: { paddingLeft: '1.25em' }
                            }),
                            padding: "dense",
                            search: false,
                            selection: true,
                            showTextRowsSelected: false,
                            toolbar: false,
                            rowStyle: rowData => ({
                                backgroundColor: rowData.tableData.hasOwnProperty('checked') && rowData.tableData.checked ? theme.palette.grid.main.active : undefined
                            }),
                        }}
                        onSelectionChange={(rows) => handleSelectedRows(rows)}
                    />
                </div>
            )}
        </ThemeProvider>
    )
}

export default MultipleSelectionExample;