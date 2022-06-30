import { useEffect } from 'react';
import { MTableToolbar } from '@material-table/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FilterList from '@mui/icons-material/FilterList';
import ViewHeadline from '@mui/icons-material/ViewHeadline';
import PropTypes from 'prop-types';

const TableToolbar = props => {
    console.log("PROPS:", props)
    // useEffect(() => {
    //     if(props.selectedRows.length !== 0){
    //         props.handleToggleSearch(false)
    //     } else {
    //         props.handleToggleSearch(true)
    //     }
    // }, [props.selectedRows])
    return (
        <Grid container alignItems="center">
            {props.title !== null ? (
                <Grid item container xs={4} sx={{ pl: '0.5em'}}>
                    <Typography variant="h6">{props.title}</Typography>
                </Grid>
            ) : null}
            <Grid item container xs={props.title ? 8 : 12} justifyContent="flex-end" alignItems="center" sx={{ pr: '0.5em' }}>
                <Grid item>
                    <MTableToolbar {...props} disableGutters style={{ paddingRight: 0, paddingLeft: 0}} showTitle={false}/>
                </Grid>
                {props.onFilterClick && props.selectedRows.length === 0 ? (
                     <Grid item>
                        <span>
                            <Tooltip title={props.showFilters ? "Hide Filters": "Show Filters"}>
                                <IconButton size="small" onClick={props.onFilterClick}>
                                    <FilterList/>
                                </IconButton>
                            </Tooltip>
                        </span>
                    </Grid>
                ) : null}
                {props.onDensityClick && props.selectedRows.length === 0 ? (
                    <Grid item>
                        <span>
                            <Tooltip title="Toggle Density">
                                <IconButton size="small" onClick={props.onDensityClick}>
                                    <ViewHeadline/>
                                </IconButton>
                            </Tooltip>
                        </span>
                    </Grid>
                ) : null}
                {props.freeAction ? (
                    props.freeAction
                ) : null}
            </Grid>
        </Grid>
    )
}

TableToolbar.propTypes = {
    onFilterClick: PropTypes.func,
    onDensityClick: PropTypes.func,
    showFilters: PropTypes.bool,
}

export default TableToolbar;