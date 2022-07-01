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
import { useLocation } from "react-router";

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

function Navigation() {
    const classes = useStyles();
    const { pathname } = useLocation();
    const [actionsOpen, setActionsOpen] = useState(false);
    const [selectionOpen, setSelectionOpen] = useState(false);
    const [toolbarOpen, setToolbarOpen] = useState(false);
    const [detailsPanelOpen, setDetailPanelOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const handleToggleActions = () => {
        setActionsOpen(!actionsOpen)
        setDetailPanelOpen(false)
        setSelectionOpen(false)
        setToolbarOpen(false)
        setSearchOpen(false)
    }

    const handleToggleSelection = () => {
        setSelectionOpen(!selectionOpen)
        setActionsOpen(false)
        setToolbarOpen(false)
        setDetailPanelOpen(false)
        setSearchOpen(false)
    }

    const handleToggleToolbar = () => {
        setToolbarOpen(!toolbarOpen)
        setActionsOpen(false)
        setSelectionOpen(false)
        setDetailPanelOpen(false)
        setSearchOpen(false)
    }

    const handleToggleDetails = () => {
        setDetailPanelOpen(!detailsPanelOpen);
        setActionsOpen(false)
        setSelectionOpen(false)
        setToolbarOpen(false)
        setSearchOpen(false)
    }

    const handleToggleSearch = () => {
        setSearchOpen(!searchOpen)
        setActionsOpen(false)
        setDetailPanelOpen(false)
        setSelectionOpen(false)
        setToolbarOpen(false)
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
                            selected={pathname === '/table-examples/actions/add-row'}
                        >
                            <ListItemText primary="Add Row"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="actions/delete-row"
                            selected={pathname === '/table-examples/actions/delete-row'}
                        >
                            <ListItemText primary="Delete Row"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="actions/free-action"
                            selected={pathname === '/table-examples/actions/free-action'}
                        >
                            <ListItemText primary="Free Action"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="actions/popout-menu"
                            selected={pathname === '/table-examples/actions/popout-menu'}
                        >
                            <ListItemText primary="Popout Menu"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                    onClick={handleToggleDetails}
                >
                    <ListItemText primary="Details Panel"/>
                    {detailsPanelOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={detailsPanelOpen} timeout="auto" unmountOnExit>
                    <List>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="details-panel/basic-panel"
                            selected={pathname === '/table-examples/details-panel/basic-panel'}
                        >
                            <ListItemText primary="Basic Panel"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="details-panel/nested-table"
                            selected={pathname === '/table-examples/details-panel/nested-table'}
                        >
                            <ListItemText primary="Nested Table Panel"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                    component={Link}
                    to="edit"
                    selected={pathname === '/table-examples/edit'}
                >
                    <ListItemText primary="Edit"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="export"
                    selected={pathname === '/table-examples/export'}
                >
                    <ListItemText primary="Export"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="filter"
                    selected={pathname === '/table-examples/filter'}
                >
                    <ListItemText primary="Filter"/>
                </ListItemButton>
                <ListItemButton
                    onClick={handleToggleSearch}
                >
                    <ListItemText primary="Search"/>
                    {searchOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={searchOpen} timeout="auto" unmountOnExit>
                    <List>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="search/custom-search"
                            selected={pathname === '/table-examples/search/custom-search'}
                        >
                            <ListItemText primary="Custom Search"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="search/toggle-search"
                            selected={pathname === '/table-examples/search/toggle-search'}
                        >
                            <ListItemText primary="Toggle Search"/>
                        </ListItemButton>
                    </List>
                </Collapse>
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
                            to="selection/conditional-selection"
                            selected={pathname === '/table-examples/selection/conditional-selection'}
                        >
                            <ListItemText primary="Conditional Selection"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="selection/single-selection"
                            selected={pathname === '/table-examples/selection/single-selection'}
                        >
                            <ListItemText primary="Single Selection"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="selection/multiple-selection"
                            selected={pathname === '/table-examples/selection/multiple-selection'}
                        >
                            <ListItemText primary="Multiple Selection"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                    component={Link}
                    to="sort"
                    selected={pathname === '/table-examples/sort'}
                >
                    <ListItemText primary="Sort"/>
                </ListItemButton>
                <ListItemButton
                    onClick={handleToggleToolbar}
                >
                    <ListItemText primary="Toolbar"/>
                    {toolbarOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={toolbarOpen} timeout="auto" unmountOnExit>
                    <List>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="toolbar/basic-toolbar"
                            selected={pathname === '/table-examples/toolbar/basic-toolbar'}
                        >
                            <ListItemText primary="Basic Toolbar"/>
                        </ListItemButton>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            component={Link}
                            to="toolbar/custom-toolbar"
                            selected={pathname === '/table-examples/toolbar/custom-toolbar'}
                        >
                            <ListItemText primary="Custom Toolbar"/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
  );
}

export default Navigation;