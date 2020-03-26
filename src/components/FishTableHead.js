import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, TableSortLabel } from "@material-ui/core";

export const FishTableHead = ({onRequestSort}) => {
  const [isAsc, setIsAsc] = useState(true);
  const createSortHandler = () => {
      onRequestSort()
      setIsAsc(!isAsc)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell>Fish #</TableCell>
        <TableCell>Fish</TableCell>
        <TableCell>Location</TableCell>
        <TableCell>Shadow Size</TableCell>
        <TableCell>Value (Bells)</TableCell>
        <TableCell>Time</TableCell>
        <TableCell>
          <TableSortLabel
            active={true}
            direction={isAsc ? "asc" : "desc"}
            onClick={createSortHandler}
          >
            Month (Northern Hempishere)
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
