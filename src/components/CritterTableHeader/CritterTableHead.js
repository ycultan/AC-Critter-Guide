import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";

export const CritterTableHead = ({ onRequestSort, isSortableTable = true, isCritterSearched, tableHeaders }) => {
  const [orderBy, setOrderBy] = useState("");

  const createSortHandler = headerName => () => {
    onRequestSort(headerName);
    setOrderBy(headerName)
  };

  return (
    <TableHead>
      <TableRow>
        {tableHeaders && tableHeaders.map((header, index) => (
          isSortableTable ? (
            <TableCell key={index}>
              <TableSortLabel
                active={orderBy === header && !isCritterSearched}
                direction={header === "Value (Bells)" ? "desc" : "asc"}
                onClick={createSortHandler(header)}
              >
                {header}
              </TableSortLabel>
            </TableCell>
          ) : (
          <TableCell key={index}>{header}</TableCell>
          )
        ))}

        {/* {isSortableTable ? (
          <TableCell>
            <TableSortLabel
              active={orderBy === "id" && !isCritterSearched}
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
        {isSortableTable ? (
          <TableCell>
            <TableSortLabel
              active={orderBy === "value" && !isCritterSearched}
              direction={"desc"}
              onClick={createSortHandler("value")}
            >
              Value (Bells)
            </TableSortLabel>
          </TableCell>
        ):(<TableCell>Value (Bells)</TableCell>)}
        <TableCell>Time</TableCell>
        {isSortableTable ? (
          <TableCell>
            <TableSortLabel
              active={orderBy === "month" && !isCritterSearched}
              direction={"asc"}
              onClick={createSortHandler("month")}
            >
              Month (Northern Hemisphere)
            </TableSortLabel>
          </TableCell>
        ) : (
          <TableCell>Month (Northern Hemisphere)</TableCell>
        )} */}
      </TableRow>
    </TableHead>
  );
};
