import React from "react";
import SimpleDialog from "./Dialog";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
                <SimpleDialog color="#FF0000" month={today} value={row.sun} />
            </TableCell>
            <TableCell align="center">
                <SimpleDialog color="#000000" month={today} value={row.mon} />
            </TableCell>
            <TableCell align="center">
                <SimpleDialog color="#000000" month={today} value={row.tue} />
            </TableCell>
            <TableCell align="center">
                <SimpleDialog color="#000000" month={today} value={row.wed} />
            </TableCell>
            <TableCell align="center">
                <SimpleDialog color="#000000" month={today} value={row.thu} />
            </TableCell>
            <TableCell align="center">
                <SimpleDialog color="#000000" month={today} value={row.fri} />
            </TableCell>
            <TableCell align="center">
                <SimpleDialog color="#0015FF" month={today} value={row.sat} />
            </TableCell>
        </TableRow>
    ));
}

export default Body;
