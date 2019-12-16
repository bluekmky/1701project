import React from "react";
import { Grid, Paper } from "@material-ui/core/";
import CalanderHead from "../../Calander/CalanderHead";

function CalanderSpace() {
    return (
        <Grid item xs={6}>
            <Paper>
                <CalanderHead></CalanderHead>
            </Paper>
        </Grid>
    );
}

export default CalanderSpace;
