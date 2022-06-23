import { useState } from 'react';
import MaterialTable from "@material-table/core";  
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes'; 
import { NestedTableHeader, NestedTableRow, MainTableCell, NestedTableCell } from '@aeros-ui/tables'; 
import { TableIcons } from '@aeros-ui/icons';
import { TableContainer, Table, TableBody, Typography } from '@mui/material'; 
import Paper from '@mui/material/Paper';
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';


const BasicPanelExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null)
    const [data, setData] = useState(
        [
            {
                id: 0,
                SEQUENCENO: 1,
                ITEMS: [1],
                INSTRUCTIONS: "HOPE ALL IS WELL. CAN YOU PLEASE CHANGE THE INSURED NAME ON PART A AFFIDAVIT AND NELP TO READ: 780 REALTY ASSOCIATES, LLC; BDP REALTY ASSOCIATES LLC THANKS, BETH",
                DETAILS: 'HOPE ALL IS WELL.<BR/> CAN YOU PLEASE CHANGE THE INSURED NAME ON PART A AFFIDAVIT AND NELP TO READ: 780 REALTY ASSOCIATES, LLC; BDP REALTY ASSOCIATES LLC<BR/><BR/> THANKS,<BR/> BETH<BR/><BR/><div style="color:red;">YOU WILL BE ABLE TO "RE-OPEN" THIS PREVIOUSLY SUBMITTED BATCH TO MAKE NECESSARY CHANGES AND CORRECTIONS REQUESTED BY ELANY.</div>\nPlease review the notes below and take the appropriate actions to successfully make the necessary changes to the item(s) in the batch via the Affidavit site [https://eefs.elany.org/eefs]',
                RECIPIENT: "JS@BROKER.COM",
                EXAMINER: "BPFLUGER",
                DATE: '01/25/2022@15:23:00',
                REMINDER: '01/26/2022@07:00:00',
            },
            {
                id: 1,
                SEQUENCENO: 2,
                ITEMS: [1, 2],
                INSTRUCTIONS: "PLEASE UPDATE THE COVERAGE CODE FROM 2301 TO 5501",
                DETAILS: 'PLEASE UPDATE THE COVERAGE CODE FROM 2301 TO 5501<BR/><BR/> THANKS,<BR/> BETH<BR/><BR/><div style="color:red;">YOU WILL BE ABLE TO "RE-OPEN" THIS PREVIOUSLY SUBMITTED BATCH TO MAKE NECESSARY CHANGES AND CORRECTIONS REQUESTED BY ELANY.</div><BR/>Please review the notes below and take the appropriate actions to successfully make the necessary changes to the item(s) in the batch via the Affidavit site [https://eefs.elany.org/eefs]',
                RECIPIENT: "JS@BROKER.COM",
                EXAMINER: "BPFLUGER",
                DATE: '01/28/2022@15:23:00',
                REMINDER: '01/29/2022@07:00:00',
            },
        ]
    )
    const [columns, setColumns] = useState([
        {
            title: 'Seq No',
            field: "SEQUENCENO",
            type: 'numeric',
            render: rowData => (<MainTableCell>{rowData.SEQUENCENO}</MainTableCell>),
            width: '100px',
            cellStyle: {
                minWidth: '100px'
            }
        },
        {
            title: "Items",
            field: "ITEMS",
            type: "numeric",
            render: rowData => rowData.ITEMS.map((item, index) => (<MainTableCell key={`item-${index}`} component="span">{item}{index === rowData.ITEMS.length -1 ? null : ', '}</MainTableCell>)),
            width: '75px',
        },
        {
            title: "Instructions",
            field: "INSTRUCTIONS",
            type: "string",
            render: rowData => (<MainTableCell noWrap>{rowData.INSTRUCTIONS}</MainTableCell>),
            width: '350px',
            cellStyle: {
                maxWidth: '350px'
            }
        },
        {
            title: "Recipient",
            field: "RECIPIENT",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.RECIPIENT}</MainTableCell>),
            width: '240px',
        },
        {
            title: "Examiner",
            field: "EXAMINER",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EXAMINER}</MainTableCell>),
            width: '150px',
        },
        {
            title: "Date",
            field: "DATE",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.DATE}</MainTableCell>),
            width: '150px',
        },
        {
            title: "Reminder",
            field: "REMINDER",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.REMINDER}</MainTableCell>),
            width: '150px'
        },
    ]);

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    const handleRowClick = (row) => {
        if(selectedRow !== null && selectedRow.tableData.id === row.tableData.id){
            closeRow();
        } else {
            closeRow();
            const rowCopy = {...row};
            const dataCopy = [...data]
            dataCopy[rowCopy.tableData.id] = rowCopy;
            setSelectedRow(rowCopy)
            setData(dataCopy)
        }
    }

    const closeRow = () => {
        const dataCopy = [...data];
        if(selectedRow !== null){
            const rowCopy = {...selectedRow};
            if(rowCopy.tableData.showDetailPanel){
                rowCopy.tableData.showDetailPanel = false;
            }
            dataCopy[rowCopy.tableData.id] = rowCopy;
        }

        setData(dataCopy)
        setSelectedRow(null)
    }

    const createDetailMarkup = item => {
        return { __html: item.DETAILS };
    };

    return (
        <ThemeProvider theme={tableTheme}>
           <CodeContainer
                title="BasicPanelExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title="Basic Details Panel Example"
                        icons={TableIcons}
                        columns={columns}
                        data={data}
                        detailPanel={({ rowData }) => (
                            <TableContainer>
                                <Table>
                                    <NestedTableHeader
                                        tableHeader='Instruction Details'
                                        colSpan={columns.length + 1}
                                        dense='dense'
                                    />
                                    <TableBody>
                                        <NestedTableRow dense="dense">
                                            <NestedTableCell><Typography variant='body2' dangerouslySetInnerHTML={createDetailMarkup(rowData)}/></NestedTableCell>
                                        </NestedTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            padding: 'dense',
                            search: false,
                            showDetailPanelIcon: true,
                            detailsPanelType: 'single',
                            rowStyle: rowData => ({
                                backgroundColor: selectedRow !== null && selectedRow.tableData.id === rowData.tableData.id ? theme.palette.grid.main.active : undefined
                            }),
                        }}
                        onRowClick={(e, selectedRow, togglePanel) => {handleRowClick(selectedRow); togglePanel()}}
                        components={{
                            Container: props => {
                                return (
                                    <Paper elevation={0} {...props}/>
                                )
                            }
                        }}
                    />
                </Paper>
            )}
        </ThemeProvider>
    )
}

export default BasicPanelExample;