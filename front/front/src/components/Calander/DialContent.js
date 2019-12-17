import React from "react";
import { Grid, List, ListItem, Paper, ListSubheader, IconButton, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
function DialContnet(props) {
    const useStyles = makeStyles(theme => ({
        content: {
            width: "250px"
        }
    }));
    const { onClose, value, month } = props;
    const classes = useStyles();
    let year = month.clone().format("YYYY");
    let mon = month.clone().format("MM");
    let day = value;
    let dateId = year + mon + day;
    const handleClose = () => {
        onClose();
    };

    const userli = [
        {
            id: "1",
            username: "flash",
            email: "flash@gmail.com"
        },
        {
            id: "2",
            username: "Bisu",
            email: "bisu@gmail.com"
        },
        {
            id: "3",
            username: "Zero",
            email: "zero@gmail.com"
        }
    ];
    return (
        <div key={dateId}>
            <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Grid>
                <Paper>
                    {year}년{mon}월{day}일
                </Paper>
            </Grid>
            <Grid container className={classes.content}>
                <Grid xs={6}>
                    <Paper>
                        <List>
                            <ListSubheader>오전</ListSubheader>

                            {userli.map(user => (
                                <ListItem button>{user.username}</ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid xs={6}>
                    <Paper>
                        <List>
                            <ListSubheader>오전</ListSubheader>
                            {userli.map(user => (
                                <ListItem button>{user.username}</ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default DialContnet;
