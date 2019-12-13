import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../ui/theme/index";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            1701
                        </Typography>
                        <Button variant="outlined" color="inherit">
                            Login / Sign Up
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}
