import { MTableToolbar } from '@material-table/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FilterList from '@mui/icons-material/FilterList';
import ViewHeadline from '@mui/icons-material/ViewHeadline';
import PropTypes from 'prop-types';
import './index.css';

const TableToolbar = props => {
    return (
        <Grid container alignItems="center">
            {props.tableTitle ? (
                <Grid item container xs={4} sx={{ pl: '0.5em'}}>
                    <Typography variant="h6">{props.tableTitle}</Typography>
                </Grid>
            ) : null}
            <Grid item container xs={props.tableTitle ? 8 : 12} justifyContent="flex-end" alignItems="center" sx={{ pr: '0.5em' }}>
                <Grid item>
                    <MTableToolbar {...props} disableGutters style={{ paddingRight: 0, paddingLeft: 0}}/>
                </Grid>
                <Grid item>
                    <span>
                        <Tooltip title={props.showFilters ? "Hide Filters": "Show Filters"}>
                            <IconButton size="small" onClick={props.onFilterClick}>
                                <FilterList/>
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
                <Grid item>
                    <span>
                        <Tooltip title="Toggle Density">
                            <IconButton size="small" onClick={props.onDensityClick}>
                                <ViewHeadline/>
                            </IconButton>
                        </Tooltip>
                    </span>
                </Grid>
            </Grid>
        </Grid>
    )
}

TableToolbar.propTypes = {
    onFilterClick: PropTypes.func.isRequired,
    onDensityClick: PropTypes.func.isRequired,
}

export default TableToolbar;