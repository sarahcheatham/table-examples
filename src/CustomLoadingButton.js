import LoadingButton from "@mui/lab/LoadingButton";
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';

const CustomLoadingButton = props => {
    return (
        <LoadingButton
            {...props}
            loading={props.loading}
            loadingPosition={props.loading ? "start" : undefined}
            startIcon={props.loading ? <Icon/> : null}
            variant="outlined"
            sx={{ width: props.width ? props.width : undefined }}
        >
            {props.name}
        </LoadingButton>
    )
}

CustomLoadingButton.propTypes = {
    name: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    startIcon: PropTypes.node,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default CustomLoadingButton;