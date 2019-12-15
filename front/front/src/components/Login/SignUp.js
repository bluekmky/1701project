import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TextField, Paper, Button, Link, Box } from "@material-ui/core";
import theme from "../../../src/ui/theme/index";
function SignUp() {
    const useStyles = makeStyles(theme => ({
        root: {
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(7)
        },
        center: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: theme.spacing(2)
        },
        textField: {
            display: "block",
            margin: 7
        },
        Button: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(2)
        }
    }));

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div>
                        <div className={classes.center}>
                            <Box>
                                <Typography variant="subtitle1">Sign Up</Typography>
                            </Box>
                        </div>
                        <form>
                            <TextField
                                size="small"
                                variant="outlined"
                                className={classes.textField}
                                placeholder="username"
                            />
                            <TextField
                                size="small"
                                variant="outlined"
                                className={classes.textField}
                                type="password"
                                placeholder="password"
                            />
                            <TextField
                                type="email"
                                size="small"
                                variant="outlined"
                                className={classes.textField}
                                placeholder="E-mail"
                            />
                            <Button
                                fullWidth
                                className={classes.Button}
                                variant="contained"
                                color="primary"
                            >
                                sign up
                            </Button>
                        </form>
                        <Typography variant="h6">
                            <Box display="flex" justifyContent="flex-end">
                                <Box>
                                    <Link> Sign In</Link>
                                </Box>
                            </Box>
                        </Typography>
                    </div>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default SignUp;
