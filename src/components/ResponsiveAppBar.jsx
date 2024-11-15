import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
}));

function ResponsiveAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Your App Name
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
