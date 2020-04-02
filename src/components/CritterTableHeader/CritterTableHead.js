import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";

export const CritterTableHead = ({
  onRequestSort,
  isSortableTable = true,
  tableHeaders,
  order,
  orderBy,
  onWhichCritterTab
}) => {

  const createSortHandler = header => () => {
    onRequestSort(header);
  };

  return (
    <TableHead>
      <TableRow>
        {tableHeaders &&
          tableHeaders.map(header =>
            isSortableTable ? (
              <TableCell key={header.id}>
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={createSortHandler(header)}
                >
                  {header.name}
                </TableSortLabel>
              </TableCell>
            ) : (
              <TableCell key={header.id}>{header.name}</TableCell>
            )
          )}
      </TableRow>
    </TableHead>
  );
};
