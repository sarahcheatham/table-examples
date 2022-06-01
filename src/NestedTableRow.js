import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';  

const NestedTableRow = props => {
    const theme = useTheme();
    return (
        <TableRow sx={{ height: props.dense === 'dense' ? '32px' : '48px', backgroundColor: props.selected ? theme.palette.grid.nested.active : theme.palette.grid.nested.default }} onClick={props.onClick}>
            {props.children}
        </TableRow>
    )
}

NestedTableRow.propTypes = {
    children: PropTypes.node.isRequired,
    dense: PropTypes.oneOf(['dense', 'normal']),
    onClick: PropTypes.func,
    selected: PropTypes.bool,
}

export default NestedTableRow;