import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

const NestedTableRow = props => {
    return (
        <TableRow sx={{ height: props.dense === 'dense' ? '32px' : '48px', backgroundColor: props.selected ? 'rgba(0, 74, 148, 0.5)' : '#EBF1F6' }} onClick={props.onClick}>
            {props.children}
        </TableRow>
    )
}

NestedTableRow.propTypes = {
    children: PropTypes.node.isRequired,
    dense: PropTypes.oneOf(['dense', 'normal']),
    selected: PropTypes.bool,
}

export default NestedTableRow;