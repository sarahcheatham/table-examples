import ActionsExample from "./pages/TableExamples/Actions/ActionsExample";
import DetailsPanelExample from './pages/TableExamples/DetailsPanelExample';
import EditExample from "./pages/TableExamples/EditExample";
import ExportExample from "./pages/TableExamples/ExportExample";
import FilterExample from "./pages/TableExamples/FilterExample";
import NestedTableExample from "./pages/TableExamples/NestedTableExample";
import SearchExample from "./pages/TableExamples/SearchExample";
import MultipleSelectionExample from "./pages/TableExamples/MultipleSelectionExample";
import SingleSelectionExample from "./pages/TableExamples/SingleSelectionExample";
import SingleSelectionExample2 from "./pages/TableExamples/SingleSelectionExample2";
import SortExample from './pages/TableExamples/SortExample';
import ToolbarExample from "./pages/TableExamples/Toolbar/ToolbarExample";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@aeros-ui/themes';
import { Routes, Route } from 'react-router-dom';
import Examples from './Examples';
import Home from './pages/Home/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/table-examples" element={<Examples/>}>
          <Route path="" element={<Home/>}/>
          <Route
            path="toolbar"
            element={<ToolbarExample/>}
          />
          <Route
            path="actions"
            element={<ActionsExample/>}
          />
          <Route
            path="details-panel"
            element={<DetailsPanelExample/>}
          />
          <Route
            path="edit"
            element={<EditExample/>}
          />
          <Route
            path="export"
            element={<ExportExample/>}
          />
          <Route
            path="filter"
            element={<FilterExample/>}
          />
          <Route
            path="nested-table"
            element={<NestedTableExample/>}
          />
          <Route
            path="search"
            element={<SearchExample/>}
          />
          <Route
            path="multiple-selection"
            element={<MultipleSelectionExample/>}
          />
          <Route
            path="single-selection"
            element={<SingleSelectionExample/>}
          />
          <Route
            path="single-selection2"
            element={<SingleSelectionExample2/>}
          />
          <Route
            path="sort"
            element={<SortExample/>}
          />
          </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
