import React from "react";
import { Grid } from "@material-ui/core/";
import CalanderSpasce from "./Calander";
import { makeStyles } from "@material-ui/core/styles";
import OtherSpace from "./Others";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2)
    }
}));
export default function Body() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <CalanderSpasce />
                <Grid item xs>
                    <OtherSpace />
                </Grid>
            </Grid>
        </div>
    );
}
