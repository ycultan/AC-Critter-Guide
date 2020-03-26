import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const FishTable = ({fishData}) => {
  const classes = makeStyles({
    table: {
      minWidth: 650
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fish #</TableCell>
            <TableCell>Fish</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Shadow Size</TableCell>
            <TableCell>Value (Bells)</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Month (Northern Hempishere)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fishData.map(fish => (
            <TableRow key={fish.id}>
              <TableCell component="th" scope="row">
                {fish.id}
              </TableCell>
              <TableCell>{fish.name}</TableCell>
              <TableCell>{fish.location}</TableCell>
              <TableCell>{fish.shadowSize}</TableCell>
              <TableCell>{fish.value}</TableCell>
              <TableCell>{fish.time}</TableCell>
              <TableCell>{fish.isYearRound ? 'Year Round' : fish.month}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
