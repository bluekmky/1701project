import React from "react";
import { Grid, Paper } from "@material-ui/core/";

function OtherSpace() {
    return (
        <Grid container spacing={1} direction="column" justify="center">
            <Grid item>
                <Paper>bbb</Paper>
            </Grid>
            <Grid item>
                <Paper>ccc</Paper>
            </Grid>
        </Grid>
    );
}

export default OtherSpace;
