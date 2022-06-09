import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* <Typography variant="h6">Table Examples</Typography> */}
      <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper'
        }}
        disablePadding
        subheader={<ListSubheader component="div">Table Examples</ListSubheader>}
      >
        <ListItemButton
            component={Link}
            to="actions"
            // href="actions"
        >
            <ListItemText primary="Actions"/>
        </ListItemButton>
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
            component={Link}
            to="single-selection"
        >
            <ListItemText primary="Single Selection"/>
        </ListItemButton>
        {/* <ListItemButton
            component={Link}
            to="single-selection2"
        >
            <ListItemText primary="Single Selection 2"/>
        </ListItemButton> */}
        <ListItemButton
            component={Link}
            to="multiple-selection"
        >
            <ListItemText primary="Multiple Selection"/>
        </ListItemButton>
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