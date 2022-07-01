import { Component } from 'react';
import { MTableToolbar } from '@material-table/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FilterList from '@mui/icons-material/FilterList';
import ViewHeadline from '@mui/icons-material/ViewHeadline';
import PropTypes from 'prop-types';

class FreeActionToolbar extends Component {
    
    componentDidMount(){
        console.log('FREE ACTION TOOLBAR PROPS:', this.props)
        // if(this.props.selectedRows.length !== 0){
        //     this.props.handleToggleSearch()
        // }

    }

    // componentDidUpdate(prevProps){
    //     // console.log("PREVPROPS SELECTED ROWS:", prevProps.selectedRows)
    //     // console.log("PROPS SELECTED ROWS:", this.props.selectedRows)
    //     // console.log("CONDITION:", prevProps.selectedRows.length !== this.props.selectedRows.length)
    //     // if(prevProps.selectedRows.length !== this.props.selectedRows.length){
    //     //     this.props.handleToggleSearch()
    //     //     // if(this.props.selectedRows.length === 0){
    //     //     //     this.props.handleToggleSearch(true)
    //     //     // } else {
    //     //     //     this.props.handleToggleSearch(false)
    //     //     // }
    //     // }
    // }
    // console.log("PROPS:", props)
    // useEffect(() => {
    //     if(props.selectedRows.length !== 0){
    //         props.handleToggleSearch(false)
    //     } else {
    //         props.handleToggleSearch(true)
    //     }
    // }, [props.selectedRows])
    render(){
        return (
            <Grid container alignItems="center">
                {this.props.title !== null ? (
                    <Grid item container xs={4} sx={{ pl: '0.5em'}}>
                        <Typography variant="h6">{this.props.title}</Typography>
                    </Grid>
                ) : null}
                <Grid item container xs={this.props.title ? 8 : 12} justifyContent="flex-end" alignItems="center" sx={{ pr: '0.5em' }}>
                    <Grid item>
                        <MTableToolbar {...this.props} disableGutters style={{ paddingRight: 0, paddingLeft: 0}} showTitle={false} search={this.props.selectedRows.length === 0 ? true : false}/>
                    </Grid>
                    {this.props.onFilterClick && this.props.selectedRows.length === 0 ? (
                         <Grid item>
                            <span>
                                <Tooltip title={this.props.showFilters ? "Hide Filters": "Show Filters"}>
                                    <IconButton size="small" onClick={this.props.onFilterClick}>
                                        <FilterList/>
                                    </IconButton>
                                </Tooltip>
                            </span>
                        </Grid>
                    ) : null}
                    {this.props.onDensityClick && this.props.selectedRows.length === 0 ? (
                        <Grid item>
                            <span>
                                <Tooltip title="Toggle Density">
                                    <IconButton size="small" onClick={this.props.onDensityClick}>
                                        <ViewHeadline/>
                                    </IconButton>
                                </Tooltip>
                            </span>
                        </Grid>
                    ) : null}
                    {this.props.freeAction ? (
                        this.props.freeAction
                    ) : null}
                </Grid>
            </Grid>
        )
    }
    
}

FreeActionToolbar.propTypes = {
    onFilterClick: PropTypes.func,
    onDensityClick: PropTypes.func,
    showFilters: PropTypes.bool,
}

export default FreeActionToolbar;