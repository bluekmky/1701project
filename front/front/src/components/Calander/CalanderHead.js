import React, { useRef, useState } from "react";
import Body from "./CalanderBody";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { Button, Box, IconButton } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 400
    },
    control: {
        display: "flex",
        justifyContent: "center"
    },
    button: {
        margin: "0 20px 0 20px"
    }
}));

export default function SimpleTable() {
    const classes = useStyles();
    const [YearMonth, setMonth] = useState(moment());
    const plus = useRef(0);

    const currunt = e => {
        plus.current = 0;
        console.log("current");
        setMonth(moment());
    };

    const next = e => {
        plus.current += 1;
        setMonth(moment().add(plus.current, "months"));
        console.log("next");
    };
    const pre = e => {
        plus.current -= 1;
        setMonth(moment().add(plus.current, "months"));
        console.log("pre");
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Box className={classes.control}>
                    <IconButton onClick={pre} className={classes.button}>
                        <NavigateBefore />
                    </IconButton>
                    <Button onClick={currunt}>{YearMonth.format("YYYY년 MM월")}</Button>
                    <IconButton onClick={next} className={classes.button}>
                        <NavigateNext />
                    </IconButton>
                </Box>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: "#FF0000" }} align="center">
                                Sun
                            </TableCell>
                            <TableCell align="center">Mon</TableCell>
                            <TableCell align="center">Tue</TableCell>
                            <TableCell align="center">Wed</TableCell>
                            <TableCell align="center">Thu</TableCell>
                            <TableCell align="center">Fri</TableCell>
                            <TableCell style={{ color: "#0015FF" }} align="center">
                                Sat
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Body value={YearMonth} />
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
