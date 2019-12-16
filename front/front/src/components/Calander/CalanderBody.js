import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

function makeRow([sun, mon, tue, wed, thu, fri, sat]) {
    return { sun, mon, tue, wed, thu, fri, sat };
}

function Body(value) {
    const today = value.value;
    console.log(today);
    const startWeek = today
        .clone()
        .startOf("month")
        .week();
    console.log(startWeek);
    const endWeek =
        today
            .clone()
            .endOf("month")
            .week() === 1
            ? 53
            : today
                  .clone()
                  .endOf("month")
                  .week();
    console.log(endWeek);
    let rows = [];
    for (let week = startWeek; week <= endWeek; week++) {
        let current_d = today
            .clone()
            .week(week)
            .startOf("week");
        let row = [];
        for (let i = 0; i <= 6; i++) {
            let a = current_d
                .clone()
                .add(i, "day")
                .format("MM");
            let b = today.format("MM");
            if (a === b) {
                row.push(
                    current_d
                        .clone()
                        .add(i, "day")
                        .format("D")
                );
            } else {
                row.push("");
            }
        }
        rows.push(makeRow(row));
    }

    return rows.map(row => (
        <TableRow>
            <TableCell align="center">
                <Button style={{ color: "#FF0000" }}>{row.sun}</Button>
            </TableCell>
            <TableCell align="center">
                <Button>{row.mon}</Button>
            </TableCell>
            <TableCell align="center">
                <Button>{row.tue}</Button>
            </TableCell>
            <TableCell align="center">
                <Button>{row.wed}</Button>
            </TableCell>
            <TableCell align="center">
                <Button>{row.thu}</Button>
            </TableCell>
            <TableCell align="center">
                <Button>{row.fri}</Button>
            </TableCell>
            <TableCell align="center">
                <Button style={{ color: "#0015FF" }}>{row.sat}</Button>
            </TableCell>
        </TableRow>
    ));
}

export default Body;
