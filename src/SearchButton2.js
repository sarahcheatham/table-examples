import LoadingButton from "@mui/lab/LoadingButton";
import ManageSearch from '@mui/icons-material/ManageSearch';
import PropTypes from 'prop-types';

const SearchButton2 = props => {
    return (
        <LoadingButton
            {...props}
            loading={props.loading}
            loadingPosition="start"
            startIcon={<ManageSearch fontSize="small"/>}
            variant="outlined"
            color="secondary"
            sx={{ width: props.width ? props.width : undefined }}
        >
            search
        </LoadingButton>
    )
}

SearchButton2.propTypes = {
    loading: PropTypes.bool.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default SearchButton2;