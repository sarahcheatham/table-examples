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
    const [data, setData] = useState([
        {
            EXAMINER: "RSIDEV",
            INSTRUCTIONS: "Dear SARAH CHEATHAM,\n\nDuring the review of Batch 6100169 SEC001 you submitted to ELANY on 07/13/2022, some questions have arisen and possible adjustments might be required in order to successfully process the items and get them returned to you.\n<div style=\"color:red;\">YOU WILL BE ABLE TO \"RE-OPEN\" THIS PREVIOUSLY SUBMITTED BATCH TO MAKE NECESSARY CHANGES AND CORRECTIONS REQUESTED BY ELANY.</div>\nPlease review the notes below and take the appropriate actions to successfully make the necessary changes to the item(s) in the batch via the Affidavit site [https://eefsapp2-ssu.elany.org:8444/eefs]\n\nItems:\n 3: Policy: BGP0000365-A / Affidavit: 2564596 / TransType: D / Amount: 13280.00\n\nPlease update the Name of Insured to Dolores Vogliano on the Part A.\n\nPlease update Item 5 to have coverage code 5051 Cyber Liability \n\nRegards,",
            LASTUPDATEDATE: "07/15/2022 11:44:50",
            RECIPIENT: "S.CHEATHAM@RSITEX.COM",
            REMINDERDATE: null,
            SEQNO: 2,
            SUBJECT: "BATCH NO: 6100169 SEC001 SUBMITTED TO ELANY ON 07/13/2022",
            UPDITEMS: "3,5",
            id: "01500302-0907-11ed-b14a-0242c0a82002"
        },
        {
            EXAMINER: "RSIDEV",
            INSTRUCTIONS: "Dear SARAH CHEATHAM,\n\nDuring the review of Batch 6100169 SEC001 you submitted to ELANY on 07/13/2022, some questions have arisen and possible adjustments might be required in order to successfully process the items and get them returned to you.\n<div style=\"color:red;\">YOU WILL BE ABLE TO \"RE-OPEN\" THIS PREVIOUSLY SUBMITTED BATCH TO MAKE NECESSARY CHANGES AND CORRECTIONS REQUESTED BY ELANY.</div>\nPlease review the notes below and take the appropriate actions to successfully make the necessary changes to the item(s) in the batch via the Affidavit site [https://eefsapp2-ssu.elany.org:8444/eefs]\n\nItems:\n 3: Policy: BGP0000365-A / Affidavit: 2564596 / TransType: D / Amount: 13280.00\n\nPlease update the Name of Insured to Dolores Vogliano on the Part A.\n\nRegards,",
            LASTUPDATEDATE: "07/15/2022 11:39:56",
            RECIPIENT: "S.CHEATHAM@RSITEX.COM",
            REMINDERDATE: null,
            SEQNO: 1,
            SUBJECT: "BATCH NO: 6100169 SEC001 SUBMITTED TO ELANY ON 07/13/2022",
            UPDITEMS: "3",
            id: "01501cd4-0907-11ed-b14a-0242c0a82002"
        }
    ])
    const [columns, setColumns] = useState([
        {
            title: 'Seq No',
            field: "SEQNO",
            type: 'numeric',
            render: rowData => (<MainTableCell>{rowData.SEQNO}</MainTableCell>),
            width: '125px'
        },
        {
            title: "Items",
            field: "UPDITEMS",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.UPDITEMS}</MainTableCell>),
        },
        {
            title: "Subject",
            field: "SUBJECT",
            type: "string",
            render: rowData => (<MainTableCell noWrap>{rowData.SUBJECT}</MainTableCell>),
            width: '350px',
            cellStyle: {
                maxWidth: '300px'
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
        },
        {
            title: "Date",
            field: "LASTUPDATEDATE",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.LASTUPDATEDATE}</MainTableCell>),
            width: '200px',
        },
        {
            title: "Reminder",
            field: "REMINDERDATE",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.REMINDERDATE}</MainTableCell>),
            width: '200px'
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
        console.log("INSTRUCTIONS:", item.INSTRUCTIONS)
        const details = item.INSTRUCTIONS.replaceAll("\n", "<br/>")
        return { __html: details };
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
                                            <NestedTableCell><Typography variant='body2' sx={{ textTransform: 'none' }} dangerouslySetInnerHTML={createDetailMarkup(rowData)}/></NestedTableCell>
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