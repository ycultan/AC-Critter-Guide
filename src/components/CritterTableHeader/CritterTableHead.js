/* 
 *  
 *  File: CritterTableHead.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";

const fishTableHeaders = [
  {id: "checkBox", name: "Caught"},
  { id: "number", name: "#" },
  { id: "name", name: "Name" },
  { id: "location", name: "Location" },
  { id: "shadowSize", name: "Shadow Size" },
  { id: "value", name: "Value" },
  { id: "time", name: "Time" },
  { id: "month", name: "Month (Northern Hemisphere)" }
];

const insectTableHeaders = [
  {id: "checkBox", name: "Caught"},
  { id: "number", name: "#" },
  { id: "name", name: "Name" },
  { id: "location", name: "Location" },
  { id: "value", name: "Value" },
  { id: "time", name: "Time" },
  { id: "month", name: "Month (Northern Hemisphere)" }
];

export const CritterTableHead = ({
  onRequestSort,
  isSortableTable = true,
  type,
  className,
}) => {

  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("number")

  const createSortHandler = header => () => {
    const isAsc = orderBy === header.id && order === "asc"
    const newOrder = isAsc ? "desc" : "asc";
    setOrder(newOrder)
    setOrderBy(header.id)
    onRequestSort(header, newOrder);
  };
  const tableHeaders = type === 'fish' ? fishTableHeaders : insectTableHeaders;

  return (
    <TableHead>
      <TableRow className={className}>
        {
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
          )
        }
      </TableRow>
    </TableHead>
  );
};
