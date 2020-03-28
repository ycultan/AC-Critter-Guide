import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: "100vh"
  },
  table: {
    minWidth: 650
  }
});

export const CritterTable = ({ title, fishData, critterTableHead }) => {
  const classes = useStyles();
  const style = {
    marginLeft: "15px"
  };

  return (
    <>
      <Typography variant="h6" style={style}>
        {title}
      </Typography>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader size="small">
            {critterTableHead}
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
                  <TableCell>
                    {fish.isYearRound ? "Year Round" : fish.month}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
