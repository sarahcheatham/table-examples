import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FilterList from '@mui/icons-material/FilterList';
import PropTypes from 'prop-types';

// might need value prop

const TableFilterInput = props => {
    return (
        <TextField
            {...props}
            variant="standard"
            size="small"
            fullWidth
            margin="dense"
            InputProps={{
                startAdornment: <InputAdornment position="start"><FilterList sx={{ fontSize: '16px' }}/></InputAdornment>
            }}
            onChange={props.onChange}
        />
    )
}

TableFilterInput.propTypes = {
    onChange: PropTypes.func.isRequired,
}


export default TableFilterInput;