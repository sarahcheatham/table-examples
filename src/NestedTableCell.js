import TableCell from '@mui/material/TableCell';
import PropTypes from 'prop-types';

const NestedTableCell = props => {
    return (
        <TableCell {...props} sx={{ py: props.dense === 'dense' ? '0px' : undefined, width: props.width ? props.width : undefined }}>
            {props.children}
        </TableCell>
    )
}

NestedTableCell.propTypes = {
    children: PropTypes.node,
    dense: PropTypes.oneOf(['dense', 'normal']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default NestedTableCell;