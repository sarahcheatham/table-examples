import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Navigation from './components/Navigation';
import Section from './components/Section';

const Examples = props => {
    return (
        <Grid container>
            <Navigation/>
            <Section open={true}>
                <Outlet/>
            </Section>
        </Grid>
    )
}

export default Examples;