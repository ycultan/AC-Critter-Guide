import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";

const fishTableHeaders = [
  { id: "number", name: "Fish #" },
  { id: "name", name: "Fish" },
  { id: "location", name: "Location" },
  { id: "shadowSize", name: "Shadow Size" },
  { id: "value", name: "Value (Bells)" },
  { id: "time", name: "Time" },
  { id: "month", name: "Month (Northern Hemisphere)" }
];

const insectTableHeaders = [
  { id: "number", name: "Insect #" },
  { id: "name", name: "Insect" },
  { id: "location", name: "Location" },
  { id: "value", name: "Value" },
  { id: "time", name: "Time" },
  { id: "month", name: "Month (Northern Hemisphere)" }
];

export const CritterTableHead = ({
  onRequestSort,
  isSortableTable = true,
  type = 'fish',
  order,
  orderBy,
  onWhichCritterTab
}) => {

  const createSortHandler = header => () => {
    onRequestSort(header);
  };

  const tableHeaders = type === 'fish' ? fishTableHeaders : insectTableHeaders;

  return (
    <TableHead>
      <TableRow>
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
