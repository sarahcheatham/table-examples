import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


const MainTableCell = props => {
    return (
        <Typography variant="body2">{props.children}</Typography>
    )
}

MainTableCell.propTypes = {
    children: PropTypes.node,
}

export default MainTableCell;