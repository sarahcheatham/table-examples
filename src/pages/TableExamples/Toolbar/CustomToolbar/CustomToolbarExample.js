import { useState } from 'react';
import MaterialTable, { MTableToolbar } from "@material-table/core";  
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes'; 
import { MainTableCell } from '@aeros-ui/tables'; 
import { TableIcons } from '@aeros-ui/icons';
import { Typography } from '@mui/material'; 
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CodeContainer from "../../../../components/CodeContainer";
import Markdown from './Markdown';


const CustomToolbarExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
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
            width: '8%',
        },
        {
            title: "Items",
            field: "ITEMS",
            type: "numeric",
            render: rowData => rowData.ITEMS.map((item, index) => (<MainTableCell key={`item-${index}`} component="span">{item}{index === rowData.ITEMS.length -1 ? null : ', '}</MainTableCell>)),
            width: '5%',
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
            width: '15%',
        },
        {
            title: "Examiner",
            field: "EXAMINER",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EXAMINER}</MainTableCell>),
            width: '10%',
        },
        {
            title: "Date",
            field: "DATE",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.DATE}</MainTableCell>),
            width: '15%',
        },
        {
            title: "Reminder",
            field: "REMINDER",
            type: "date",
            render: rowData => (<MainTableCell>{rowData.REMINDER}</MainTableCell>),
            width: '15%'
        },
    ]);

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };


    return (
        <ThemeProvider theme={tableTheme}>
           <CodeContainer
                title="CustomToolbarExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <Paper sx={{ my: '1em', mx: '2em', width: '100%' }} elevation={4}>
                    <MaterialTable
                        title={
                            <>
                                <Grid item>
                                    <Typography variant='caption'>Batch</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4" sx={{ fontWeight: 500 }}>4215011</Typography>
                                </Grid>
                            </>
                        }
                        icons={TableIcons}
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            padding: 'dense',
                            search: false,
                        }}
                        components={{
                            Toolbar: props => (
                                <Grid container sx={{ p: '0.25em' }} alignItems="center">
                                    <Grid item container xs={6} flexDirection="column" sx={{ pl: '0.25em' }}>
                                        <MTableToolbar {...props}/>
                                    </Grid>
                                    <Grid item container xs={3} flexDirection="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant='caption'>Item Count</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h4" sx={{ fontWeight: 500 }}>2</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container xs={3} flexDirection="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant='caption'>Status</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h4" color="error" sx={{ fontWeight: 500 }}>Action Required</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ),
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

export default CustomToolbarExample;