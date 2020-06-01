/* 
 *  
 *  File: CritterTableHead.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useContext, useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";
import LocalStorageContext from "../../context/LocalStorageContext";

const fishTableHeaders = (hemisphere) => [
  {id: "checkBox", name: "Caught"},
  { id: "number", name: "#" },
  { id: "name", name: "Name" },
  { id: "location", name: "Location" },
  { id: "shadowSize", name: "Shadow Size" },
  { id: "value", name: "Price" },
  { id: "time", name: "Time" },
  { id: "month", name: `Month (${hemisphere})` }
];

const insectTableHeaders = (hemisphere) => [
  {id: "checkBox", name: "Caught"},
  { id: "number", name: "#" },
  { id: "name", name: "Name" },
  { id: "location", name: "Location" },
  { id: "value", name: "Price" },
  { id: "time", name: "Time" },
  { id: "month", name: `Month (${hemisphere})` }
];

export const CritterTableHead = ({
  onRequestSort,
  isSortableTable = true,
  type,
  className,
}) => {
  const { isNorth } = useContext(LocalStorageContext);
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("number")

  const createSortHandler = header => () => {
    const isAsc = orderBy === header.id && order === "asc"
    const newOrder = isAsc ? "desc" : "asc";
    setOrder(newOrder)
    setOrderBy(header.id)
    onRequestSort(header, newOrder);
  };
  const hemisphere = isNorth ? 'Northern Hemisphere' : 'Southern Hemisphere';
  const tableHeaders = type === 'fish' ? fishTableHeaders(hemisphere) : insectTableHeaders(hemisphere);

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
