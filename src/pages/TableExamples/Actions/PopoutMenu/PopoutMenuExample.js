import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MaterialTable from '@material-table/core';  
import { MainTableCell } from '@aeros-ui/tables';
import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes';  
import { useTheme } from '@mui/material/styles';  
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import { Edit, AttachFile, Print, DeleteForever, Info, MoreVert } from "@mui/icons-material";
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

const PopoutMenuExample = () => {
    const theme = useTheme()
    const [showCode, setShowCode] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const popoverOpen = Boolean(anchorEl);
    const id = popoverOpen ? 'menu-popover' : undefined;
    const [selectedRow, setSelectedRow] = useState(null)
    const [data, setData] = useState(
        [
            {
                id: 0,
                ITEMNO: 1,
                TYPE: "ENDORSEMENT",
                AFFIDAVITNO: "1522073",
                POLICYNO: "CCP1021941",
                INSUREDNAME: "SHOE BOX CITY, INC",
                PREMIUM: "750",
                INCEPTION: "10/20/2021",
                EXPIRATION: "10/20/2022",
                STATUS: "Complete"
            },
            {
                id: 1,
                ITEMNO: 2,
                TYPE: "DECLARATION",
                AFFIDAVITNO: "1522073",
                POLICYNO: "CCP1021941",
                INSUREDNAME: "SHOE BOX CITY, INC",
                PREMIUM: "15000",
                INCEPTION: "10/20/2021",
                EXPIRATION: "10/20/2022",
                STATUS: "Incomplete"
            },
        ]
    )

    const columns = [
        {
            title: 'Item',
            field: "ITEMNO",
            type: 'numeric',
            render: rowData => (<MainTableCell>{rowData.ITEMNO}</MainTableCell>),
            width: '50px',
        },
        {
            title: "Type",
            field: "TYPE",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.TYPE}</MainTableCell>),
            width: '125px',
        },
        {
            title: "Affidavit No",
            field: "AFFIDAVITNO",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.AFFIDAVITNO}</MainTableCell>),
            width: '150px',

        },
        {
            title: "Policy No",
            field: "POLICYNO",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.POLICYNO}</MainTableCell>),
            width: '150px',
        },
        {
            title: "Insured Name",
            field: "INSUREDNAME",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.INSUREDNAME}</MainTableCell>),
            width: '275px',
        },
        {
            title: "Premium",
            field: "PREMIUM",
            type: "numeric",
            render: rowData => (<MainTableCell>{rowData.PREMIUM}</MainTableCell>),
            width: '125px',
        },
        {
            title: "Effective",
            field: "INCEPTION",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.INCEPTION}</MainTableCell>),
            width: '100px'
        },
        {
            title: "Expiration",
            field: "EXPIRATION",
            type: "string",
            render: rowData => (<MainTableCell>{rowData.EXPIRATION}</MainTableCell>),
            width: '100px'
        },
        {
            title: 
            <Grid item container alignItems="center">
                <Typography variant="body2" sx={{ textTransform: 'none', fontWeight: 500, color: "common.white" }}>Status</Typography>
                <IconButton onClick={() => alert("Status dialog open")}><Info fontSize="small" sx={{ color: "common.white" }}/></IconButton>
            </Grid>,
            field: "STATUS",
            type: 'string',
            render: rowData => (
                <Grid item container justifyContent="space-between" alignItems="center">
                    <Chip label={rowData.STATUS} size="small"/>
                    <IconButton size="small" onClick={e => handleOpenPopover(e, rowData)} aria-describedby={id}>
                        <MoreVert fontSize="small"/>
                    </IconButton>
                    <Popover
                        id={id}
                        open={popoverOpen}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        onClose={() => handleClosePopover()}
                    >
                        <List dense>
                            {popoverList.map((item, index) => (
                                <ListItem 
                                    key={`popoverlist-${index}`}
                                    button
                                    onClick={() => alert(`${item.name} ${selectedRow.TYPE} clicked`)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} primaryTypographyProps={{ sx: { textTransform: 'none' } }} />
                                </ListItem>
                            ))}
                        </List>
                    </Popover>
                </Grid>
            ),
            width: '200px',
            sorting: false
        }
    ];

    const handleOpenPopover = (e, rowData) => {
        setAnchorEl(e.currentTarget);
        setSelectedRow(rowData);
    }

    const handleClosePopover = () => {
        setAnchorEl(null)
        setSelectedRow(null)
    }

    const handleToggleCode = () => {
        setShowCode(!showCode)
    };

    return (
        <ThemeProvider theme={tableTheme}>
            {process.env.NODE_ENV !== 'production' ? (
                <Grid container sx={{ m: '1em' }}>
                    <Grid item>
                        <Button component={Link} to="/table-examples">Back to Home</Button>
                    </Grid>
                </Grid>
            ): null}
            <CodeContainer
                title="ActionsExample.js"
                codeString={Markdown}
                showCode={showCode}
                handleToggleCode={() => handleToggleCode()}
            />
            {!showCode && (
                <div style={{margin: '1em' }}>
                    <MaterialTable
                        title={null}
                        columns={columns}
                        data={data}
                        options={{
                            headerStyle: { backgroundColor: theme.palette.grid.main.header },
                            padding: 'dense',
                            search: false,
                            toolbar: false,
                            rowStyle: rowData => ({
                                backgroundColor: selectedRow !== null && selectedRow.tableData.id === rowData.tableData.id ? theme.palette.grid.main.active : undefined
                            }),
                        }}
                    />
                </div>
            )}
        </ThemeProvider>
    )
}

export default PopoutMenuExample;