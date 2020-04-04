/* 
 *  
 *  File: CritterTable.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

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

export const CritterTable = ({
  title,
  critter,
  critterData,
  critterTableHead,
  isSearchingForCritter
}) => {
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
              {critterData.length < 1 && !isSearchingForCritter ? (
                <TableRow>
                  <TableCell>{`No ${critter} leaving this month`}</TableCell>
                </TableRow>
              ) : (
                critterData.map(critter => (
                  <TableRow key={critter.id}>
                    <TableCell component="th" scope="row">
                      {critter.id}
                    </TableCell>
                    <TableCell>{critter.name}</TableCell>
                    <TableCell>{critter.location}</TableCell>
                    {critter.shadowSize && (
                      <TableCell>{critter.shadowSize}</TableCell>
                    )}
                    <TableCell>{critter.value}</TableCell>
                    <TableCell>{critter.time}</TableCell>
                    <TableCell>
                      {critter.isYearRound ? "Year Round" : critter.month}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
