import React from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        marginLeft: 225,
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(1),
        height: '100%',
        [theme.breakpoints.down('xl')]: {
            marginLeft: 200,
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: 180,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 150,
        },
    },
    contentShift: {
        marginLeft: 225,
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(1),
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

const Section = props => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={clsx(classes.content, {
                [classes.contentShift]: props.open,
            })}
        >
            {props.children}
        </Grid>
    );
};

export default Section;