/*
 *
 *  File: CritterTable.js
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Typography, Checkbox } from "@material-ui/core";
import { CritterTableHead } from "../CritterTableHeader/CritterTableHead";
import LocalStorageContext from "../../context/LocalStorageContext";
import { monthNames } from "../../data/utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
  h6: {
    margin: "16px 0",
  },
  strikeThrough: {
    textDecoration: "line-through",
  },
  tr: {
    cursor: "pointer",
  },
  alignLeft: {
    marginRight: "auto",
  },
  alignRight: {
    marginLeft: "auto",
    textAlign: "right",
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "table-row",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "table-row",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  titleCase: {
    textTransform: "capitalize",
  },
}));

const displayMonth = (monthRange) => {
  const ranges = monthRange.split('&');

  const months = ranges.map(range => range.trim().split('-').map(m => monthNames[parseInt(m) - 1]).join('-'));

  return months.join(', ');
}

export const CritterTable = ({
  title,
  critter,
  critterData,
  isSearchingForCritter,
  handleRequestSort,
  currentCritterTab,
  isImportantSection,
}) => {
  const classes = useStyles();
  const { critterStorage, toggleCritter } = useContext(LocalStorageContext);

  return (
    <div style={{ margin: '20px 0px' }}>
      <Typography variant="h6" className={classes.h6}>
        {title}
      </Typography>
      <Paper className={classes.root}>
        <TableContainer>
          <Table stickyHeader size="small">
            {isImportantSection ? (
              <CritterTableHead
                className={classes.desktop}
                type={critter}
                isSortableTable={false}
              />
            ) : (
              <CritterTableHead
                className={classes.desktop}
                type={critter}
                onRequestSort={handleRequestSort}
                currentCritterTab={currentCritterTab}
              />
            )}
            <TableBody>
              {critterData.length < 1 ? (
                <TableRow>
                  <TableCell>{`No ${critter} found`}</TableCell>
                </TableRow>
              ) : (
                critterData.map((critter) => (
                  <>
                  <TableRow
                    key={`${critter.id}-desktop`}
                    className={`${classes.desktop} ${classes.tr} ${critterStorage[critter.name] && classes.strikeThrough}`}
                    onClick={() => toggleCritter(critter.name)}
                    hover
                  >
                    <TableCell>
                      <Checkbox 
                        color='primary' 
                        checked={critterStorage[critter.name] || false}
                        onChange={() => toggleCritter(critter.name)}
                      />
                    </TableCell>
                    <TableCell>
                      {critter.id}
                    </TableCell>
                    <TableCell className={classes.titleCase}>{critter.name}</TableCell>
                    <TableCell>{critter.availability.location}</TableCell>
                    {critter.shadowSize && (
                      <TableCell>{critter.shadowSize}</TableCell>
                    )}
                    <TableCell>$ {critter.price}</TableCell>
                    <TableCell>{critter.availability.time}</TableCell>
                    <TableCell>
                      {critter.isYearRound ? "Year Round" : displayMonth(critter.availability.month)}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={`${critter.id}-mobile`}
                    className={classes.mobile}
                    onClick={() => toggleCritter(critter.name)}
                  >
                    <TableCell style={{ display: "flex" }}>
                      <div className={classes.alignLeft}>
                        <Typography variant="h6" className={`${classes.titleCase} ${critterStorage[critter.name] ? classes.strikeThrough : ''}`}>{critter.name}</Typography>
                        <Typography variant="body2">{critter.availability.location}</Typography>
                        <Typography variant="body2">{critter.shadowSize}</Typography>
                      </div>
                      <div className={classes.alignRight}>
                        <Typography variant="h6">$ {critter.price}</Typography>
                        {critter.availability.time.split(',').map((time, i) => (
                          <Typography key={`${critter.name}-time-${i}`} variant="body2" style={{ whiteSpace: "nowrap" }}>
                            {time}
                          </Typography>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                  </>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
