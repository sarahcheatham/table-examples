import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';  

const NestedTableHeader = props => {
    const theme = useTheme();
    return (
        <TableHead>
            <TableRow style={{ backgroundColor: theme.palette.grid.nested.header }}>
                {props.tableSubheaders.map((sub, i) => (
                    <TableCell 
                        variant="head" 
                        padding={props.dense === 'dense' ? "none" : "normal"} 
                        key={`${sub}-${i}`} 
                        sx={{ color: theme.palette.grid.nested.headerText }} 
                        colSpan={props.colSpan ? props.colSpan : undefined}
                    >
                        {sub}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

NestedTableHeader.propTypes = {
    colSpan: PropTypes.number,
    dense: PropTypes.oneOf(['dense', 'normal']),
    tableSubheaders: PropTypes.array.isRequired
}

export default NestedTableHeader;