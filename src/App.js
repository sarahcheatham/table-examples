// import TableToolbarExample from "./examples/TableToolbarExample";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <NestedTableExample/>
          {/* <TableToolbarExample/> */}
          {/* <TableWithInputsExample/> */}
        </Grid>
        <Grid item xs={2}>
          <Stack direction="column" spacing={3}>
            <CustomLoadingButton
              loading={true}
              name="reset"
              startIcon={null}
              width="50%"
              size="small"
              onClick={() => console.log('clicked')}
            />
            <CustomLoadingButton
              loading={false}
              name="refresh"
              startIcon={null}
              width="50%"
              color="primary"
              size="small"
            />
            <SearchButton
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
            />
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
