import TableToolbarExample from "./examples/TableToolbarExample";
import NestedTableExample from './examples/NestedTableExample';
import TableWithInputsExample from './examples/TableWithInputsExample';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@aeros-ui/themes';
import { Routes, Route } from 'react-router-dom';
import Examples from './Examples';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/table-examples" element={<Examples/>}> */}
          <Route
            path="/table-toolbar"
            element={<TableToolbarExample/>}
          />
          <Route
            path="/nested-table"
            element={<NestedTableExample/>}
          />
          {/* <Route
            path="editable-table"
            element={<TableWithInputsExample/>}
          /> */}
        {/* </Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
