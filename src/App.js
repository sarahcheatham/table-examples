import AddRowExample from "./pages/TableExamples/Actions/AddRow/AddRowExample";
import DeleteRowExample from "./pages/TableExamples/Actions/DeleteRow/DeleteRowExample";
import FreeActionExample from "./pages/TableExamples/Actions/FreeAction/FreeActionExample";
import PopoutMenuExample from "./pages/TableExamples/Actions/PopoutMenu/PopoutMenuExample";
import BasicPanelExample from './pages/TableExamples/DetailsPanel/BasicPanel/BasicPanelExample';
import EditExample from "./pages/TableExamples/Edit/EditExample";
import ExportExample from "./pages/TableExamples/Export/ExportExample";
import FilterExample from "./pages/TableExamples/Filter/FilterExample";
import NestedTableExample from "./pages/TableExamples/DetailsPanel/NestedTable/NestedTableExample";
import SearchExample from "./pages/TableExamples/Search/SearchExample";
import MultipleSelectionExample from "./pages/TableExamples/Selection/MultipleSelection/MultipleSelectionExample";
import SingleSelectionExample from "./pages/TableExamples/Selection/SingleSelection/SingleSelectionExample";
import SortExample from './pages/TableExamples/Sort/SortExample';
import BasicToolbarExample from "./pages/TableExamples/Toolbar/BasicToolbar/BasicToolbarExample";
import CustomToolbarExample from './pages/TableExamples/Toolbar/CustomToolbar/CustomToolbarExample';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@aeros-ui/themes';
import { Routes, Route } from 'react-router-dom';
import Examples from './Examples';
import TableOutlet from "./components/TableOutlet";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/table-examples" element={<Examples/>}>
            <Route
              path="actions"
              element={<TableOutlet/>}
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
                path="free-action"
                element={<FreeActionExample/>}
              />
              <Route
                path="popout-menu"
                element={<PopoutMenuExample/>}
              />
            </Route>
            <Route
              path="details-panel"
              element={<TableOutlet/>}
            >
              <Route
                path="basic-panel"
                element={<BasicPanelExample/>}
              />
              <Route
                path="nested-table"
                element={<NestedTableExample/>}
              />
            </Route>
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
              path="search"
              element={<SearchExample/>}
            />
            <Route
              path="selection"
              element={<TableOutlet/>}
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
            <Route
              path="sort"
              element={<SortExample/>}
            />
            <Route
              path="toolbar"
              element={<TableOutlet/>}
            >
              <Route
                path="basic-toolbar"
                element={<BasicToolbarExample/>}
              />
              <Route
                path="custom-toolbar"
                element={<CustomToolbarExample/>}
              />
            </Route>
          </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
