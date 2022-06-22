import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Outlet, Link } from 'react-router-dom';

function Home() {
    const [actionsOpen, setActionsOpen] = useState(false);
    const [selectionOpen, setSelectionOpen] = useState(false);

    const handleToggleActions = () => {
        setActionsOpen(!actionsOpen)
    }

    const handleToggleSelection = () => {
        setSelectionOpen(!selectionOpen)
    }
    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    height: '100vh',
                    maxWidth: 300,
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
                {/* <ListItemButton
                    component={Link}
                    to="single-selection"
                >
                    <ListItemText primary="Single Selection"/>
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to="multiple-selection"
                >
                    <ListItemText primary="Multiple Selection"/>
                </ListItemButton> */}
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
            <Outlet/>
        </div>
  );
}

export default Home;