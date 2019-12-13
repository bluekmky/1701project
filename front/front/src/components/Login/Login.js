import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FormControlLabel, Checkbox, TextField, Paper, Button, Link, Box } from "@material-ui/core";
import theme from "../../../src/ui/theme/index";

function Login() {
    const [checked, setChecked] = useState({
        remem_Checked: false
    });

    const handleChange = name => e => {
        setChecked({ ...checked, [name]: e.target.checked });
        console.log(checked);
    };

    const useStyles = makeStyles(theme => ({
        root: {
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            marginTop: theme.spacing(9),
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
            margin: 4
        }
    }));

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper color="primary" className={classes.paper}>
                    <div display="flex">
                        <div className={classes.center}>
                            <Box>
                                <Typography variant="subtitle1">Sign In</Typography>
                            </Box>
                        </div>
                        <from>
                            <TextField
                                fullWidth
                                size="small"
                                color="primary"
                                variant="outlined"
                                placeholder="username"
                                className={classes.textField}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                color="primary"
                                variant="outlined"
                                type="password"
                                placeholder="password"
                                className={classes.textField}
                            />
                            <Typography variant="h6">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.remem_Checked}
                                            onChange={handleChange("remem_Checked")}
                                            value="remem_checked"
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                />
                            </Typography>
                            <div className={classes.center}>
                                <Button fullWidth variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>
                        </from>
                        <Typography variant="h6">
                            <Box display="flex">
                                <Box flexGrow={1}>
                                    <Link>Forget your password?</Link>
                                </Box>
                                <Box>
                                    <Link>Sign Up</Link>
                                </Box>
                            </Box>
                        </Typography>
                    </div>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default Login;
