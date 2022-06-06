import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';

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
            component={'a'}
            href="/"
        >
            <ListItemText primary="Home"/>
        </ListItemButton>
        <ListItemButton
            component={'a'}
            href="table-toolbar"
        >
            <ListItemText primary="Toolbar Example"/>
        </ListItemButton>
        <ListItemButton
            component={'a'}
            href="nested-table"
        >
            <ListItemText primary="Details Panel Example"/>
        </ListItemButton>
      </List>
    </div>
  );
}

export default Home;