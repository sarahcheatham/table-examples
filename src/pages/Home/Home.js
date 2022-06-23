import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        width: 225,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('xl')]: {
            width: 200,
        },
        [theme.breakpoints.down('lg')]: {
            width: 180,
        },
        [theme.breakpoints.down('md')]: {
            width: 150,
        },
    },
    drawer: {
        flexShrink: 0,
    },
}))

function Home() {
    const classes = useStyles();
    const [actionsOpen, setActionsOpen] = useState(false);
    const [selectionOpen, setSelectionOpen] = useState(false);

    const handleToggleActions = () => {
        setActionsOpen(!actionsOpen)
    }

    const handleToggleSelection = () => {
        setSelectionOpen(!selectionOpen)
    }
    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <List
                sx={{
                    height: '100vh',
                    bgcolor: 'background.paper'
                }}
                disablePadding
                subheader={<ListSubheader component="div">Table Examples</ListSubheader>}
            >
                <ListItemButton
                    onClick={handleToggleActions}
                >
                    <ListItemText primary="Actions"/>
                    {actionsOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={actionsOpen} timeout="auto" unmountOnExit>
                    <List>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="actions/add-row"
                        >
                            <ListItemText primary="Add Row"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="actions/delete-row"
                        >
                            <ListItemText primary="Delete Row"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="actions/popout-menu"
                        >
                            <ListItemText primary="Popout Menu"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                    component={Link}
                    to="details-panel"
                >
                    <ListItemText primary="Details Panel"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="edit"
                >
                    <ListItemText primary="Edit"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="export"
                >
                    <ListItemText primary="Export"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="filter"
                >
                    <ListItemText primary="Filter"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="nested-table"
                >
                    <ListItemText primary="Nested Table"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="search"
                >
                    <ListItemText primary="Search"/>
                </ListItemButton>

                <ListItemButton
                    onClick={handleToggleSelection}
                >
                    <ListItemText primary="Selection"/>
                    {selectionOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={selectionOpen} timeout="auto" unmountOnExit>
                    <List>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="selection/single-selection"
                        >
                            <ListItemText primary="Single Selection"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="selection/multiple-selection"
                        >
                            <ListItemText primary="Multiple Selection"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                    component={Link}
                    to="sort"
                >
                    <ListItemText primary="Sort"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="toolbar"
                >
                    <ListItemText primary="Toolbar"/>
                </ListItemButton>
            </List>
        </Drawer>
  );
}

export default Home;