import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import PropTypes from 'prop-types';

const NestedTableHeader = props => {
    console.log("PROPS:", props)
    return (
        <TableHead>
            <TableRow style={{ backgroundColor: 'rgba(42, 51, 62, .65)'}}>
                {props.tableSubheaders.map((sub, i) => (
                    <TableCell variant="head" padding="none" key={`${sub}-${i}`} style={{ color: '#F5F5F5'}} colSpan={props.colSpan ? props.colSpan : undefined}>{sub}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

NestedTableHeader.propTypes = {
    colSpan: PropTypes.number,
    tableSubheaders: PropTypes.array.isRequired
}

export default NestedTableHeader;