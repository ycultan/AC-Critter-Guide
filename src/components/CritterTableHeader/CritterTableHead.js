import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";

export const CritterTableHead = ({ onRequestSort, isSortableTable = true }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [orderBy, setOrderBy] = useState("");
  const createSortHandler = headerName => () => {
    onRequestSort(headerName);
    setIsAsc(!isAsc);
    setOrderBy(headerName);
  };

  return (
    <TableHead>
      <TableRow>
        {isSortableTable ? (
          <TableCell>
            <TableSortLabel
              active={orderBy === "id"}
              direction={"asc"}
              onClick={createSortHandler("id")}
            >
              Fish #
            </TableSortLabel>
          </TableCell>
        ) : (
          <TableCell>Fish #</TableCell>
        )}
        <TableCell>Fish</TableCell>
        <TableCell>Location</TableCell>
        <TableCell>Shadow Size</TableCell>
        <TableCell>Value (Bells)</TableCell>
        <TableCell>Time</TableCell>
        {isSortableTable ? (
          <TableCell>
            <TableSortLabel
              active={orderBy === "month"}
              direction={"asc"}
              onClick={createSortHandler("month")}
            >
              Month (Northern Hemisphere)
            </TableSortLabel>
          </TableCell>
        ) : (
          <TableCell>Month (Northern Hemisphere)</TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};
