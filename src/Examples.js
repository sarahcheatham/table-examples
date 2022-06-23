import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Home from './pages/Home/Home';
import Section from './components/Section';

const Examples = props => {
    return (
        <Grid container>
            <Home/>
            <Section open={true}>
                <Outlet/>
            </Section>
        </Grid>
    )
}

export default Examples;