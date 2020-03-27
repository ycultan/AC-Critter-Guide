import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";

export const FishTableHead = ({ onRequestSort }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [orderBy, setOrderBy] = useState('')
  const createSortHandler = headerName => () => {
    onRequestSort(headerName);
    setIsAsc(!isAsc);
    setOrderBy(headerName)
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableSortLabel
            active={orderBy === 'id'}
            direction={"asc"}
            onClick={createSortHandler("id")}
          >
            Fish #
          </TableSortLabel>
        </TableCell>
        <TableCell>Fish</TableCell>
        <TableCell>Location</TableCell>
        <TableCell>Shadow Size</TableCell>
        <TableCell>Value (Bells)</TableCell>
        <TableCell>Time</TableCell>
        <TableCell>
          <TableSortLabel
            active={orderBy === 'month'}
            direction={"asc"}
            onClick={createSortHandler("month")}
          >
            Month (Northern Hempishere)
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
