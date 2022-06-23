import PopoutMenuExample from "./pages/TableExamples/Actions/PopoutMenu/PopoutMenuExample";
import AddRowExample from "./pages/TableExamples/Actions/AddRow/AddRowExample";
import DeleteRowExample from "./pages/TableExamples/Actions/DeleteRow/DeleteRowExample";
import DetailsPanelExample from './pages/TableExamples/DetailsPanel/DetailsPanelExample';
import EditExample from "./pages/TableExamples/Edit/EditExample";
import ExportExample from "./pages/TableExamples/Export/ExportExample";
import FilterExample from "./pages/TableExamples/Filter/FilterExample";
import NestedTableExample from "./pages/TableExamples/NestedTable/NestedTableExample";
import SearchExample from "./pages/TableExamples/Search/SearchExample";
import MultipleSelectionExample from "./pages/TableExamples/Selection/MultipleSelection/MultipleSelectionExample";
import SingleSelectionExample from "./pages/TableExamples/Selection/SingleSelection/SingleSelectionExample";
// import SingleSelectionExample2 from "./pages/TableExamples/SingleSelectionExample2";
import SortExample from './pages/TableExamples/Sort/SortExample';
import ToolbarExample from "./pages/TableExamples/Toolbar/ToolbarExample";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@aeros-ui/themes';
import { Routes, Route } from 'react-router-dom';
import Examples from './Examples';
import Actions from './pages/TableExamples/Actions/Actions';
import Selection from './pages/TableExamples/Selection/Selection';
import Home from './pages/Home/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/table-examples" element={<Examples/>}>
          {/* <Route path="" element={<Home/>}/> */}
          <Route
            path="toolbar"
            element={<ToolbarExample/>}
          />
          <Route
            path="actions"
            element={<Actions/>}
          >
            <Route
              path="add-row"
              element={<AddRowExample/>}
            />
            <Route
              path="delete-row"
              element={<DeleteRowExample/>}
            />
            <Route
              path="popout-menu"
              element={<PopoutMenuExample/>}
            />
          </Route>
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
            path="selection"
            element={<Selection/>}
          >
            <Route
              path="multiple-selection"
              element={<MultipleSelectionExample/>}
            />
            <Route
              path="single-selection"
              element={<SingleSelectionExample/>}
            />
          </Route>
          {/* <Route
            path="single-selection2"
            element={<SingleSelectionExample2/>}
          /> */}
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
