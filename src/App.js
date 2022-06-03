import TableToolbarExample from "./examples/TableToolbarExample";
import NestedTableExample from './examples/NestedTableExample';
import TableWithInputsExample from './examples/TableWithInputsExample';
// import PercentageInput from './PercentageInput';
import { CustomLoadingButton, SearchButton, AddBatchButton } from '@aeros-ui/components';
// import SearchButton2 from "./SearchButton2";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
// import theme from './Theme';
import { theme } from '@aeros-ui/themes';
import { Routes, Route } from 'react-router-dom';
import Guides from './Guides';
import Examples from './Examples';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TableToolbarExample/>
      {/* <Routes>
        HERE
        <Route path="/guides" element={<Guides/>}>
          <Route path="/examples" element={<Examples/>}>
            <Route
              path="/table-toolbar"
              element={<TableToolbarExample/>}
            />
            <Route
              path="/nested-table"
              element={<NestedTableExample/>}
            />
            <Route
              path="/editable-table"
              element={<TableWithInputsExample/>}
            />
          </Route>
        </Route>
      </Routes> */}
      {/* <Grid container spacing={2}>
      <Grid item container columnSpacing={2}>
        <Grid item xs={11}>
          <NestedTableExample/> */}
          {/* <TableToolbarExample/> */}
          {/* <TableWithInputsExample/> */}
        {/* </Grid> */}
        {/* <Grid item xs={1}>
          <Stack direction="column" spacing={3}>
            <CustomLoadingButton
              loading={false}
              name="details"
              startIcon={null}
              // width="50%"
              size="small"
              onClick={() => console.log('clicked')}
            />
            <CustomLoadingButton
              loading={false}
              name="instructions"
              startIcon={null}
              // width="50%"
              color="primary"
              size="small"
            />
            <CustomLoadingButton
              loading={false}
              name="dms/ocr"
              startIcon={null}
              // width="50%"
              color="primary"
              size="small"
            /> */}
            {/* <SearchButton
                loading={true}
                width="50%"
                size="small"
                onClick={() => console.log('clicked')}
            />
            <SearchButton
                loading={false}
                width="50%"
                size="small"
                onClick={() => console.log('clicked')}
            />
            <AddBatchButton
              onClick={() => console.log("clicked")}
            /> */}
          {/* </Stack>
        </Grid>
      </Grid> */}
      {/* <Grid item container>
        <TableToolbarExample/>
      </Grid>
      </Grid> */}
    </ThemeProvider>
  );
}

export default App;
