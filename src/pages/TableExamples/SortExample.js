import { ThemeProvider } from '@mui/material/styles';
import { tableTheme } from '@aeros-ui/themes'; 
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SortExample = () => {
    return (
        <ThemeProvider theme={tableTheme}>
            {process.env.NODE_ENV !== 'production' ? (
                <Grid container sx={{ m: '1em' }}>
                    <Grid item>
                        <Button component={Link} to="/table-examples">Back to Home</Button>
                    </Grid>
                </Grid>
            ): null}
            <div style={{ margin: '1em' }}>
                <Typography variant="h6">Sort Example</Typography>
            </div>
        </ThemeProvider>
    )
}

export default SortExample;