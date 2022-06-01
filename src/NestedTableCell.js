import TableCell from '@mui/material/TableCell';
import PropTypes from 'prop-types'

const NestedTableCell = props => {
    return (
        <TableCell {...props} sx={{ padding: props.dense === 'dense' ? '0px 0.5em' : undefined, width: props.width ? props.width : undefined }}>
            {props.children}
        </TableCell>
    )
}

NestedTableCell.propTypes = {
    children: PropTypes.node,
    dense: PropTypes.oneOf(['dense', 'normal'])
}

export default NestedTableCell;