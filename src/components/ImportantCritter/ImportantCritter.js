/* 
 *  
 *  File: ImportantCritter.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CritterTable } from "../CritterTable/CritterTable";
import { DropdownSelector } from "../DropdownSelector/DropdownSelector";
import { fishWithDates } from "../../data/FishData";
import { insectWithDates } from "../../data/InsectData";
import { getCrittersAvailableByMonth, getCrittersLeavingByMonth, getQueryParam, monthNameToNumMap } from "../../data/utils";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    margin: '16px 0',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  },
  dropdownContainer: {
    margin: '16px 0',

    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  button: {
    margin: '2px'
  }
}));

const monthNames = Object.keys(monthNameToNumMap)

export const ImportantCritterSection = ({ critter }) => {
  const [selectedMonth, setSelectedMonth] = useState(getMonth());
  const critterWithDates = critter === 'fish' ? fishWithDates : insectWithDates;
  const classes = useStyles();

  return (
    <>
      <div className={classes.buttonContainer}>
        {monthNames.map(name =>
          <Button
            key={`${name}-btn`}
            className={classes.button}
            size="small"
            variant={name === selectedMonth ? 'contained' : 'outlined'}
            onClick={() => setSelectedMonth(name) }
            color={name === selectedMonth ? 'primary' : 'default'}
          >
            {name}
          </Button>
        )}
      </div>
      <div className={classes.dropdownContainer}>
        <DropdownSelector label="Month" data={monthNames} selected={selectedMonth} onSelect={e => setSelectedMonth(e.target.value)} />
      </div>
      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title={`Leaving end of ${selectedMonth}`}
          critterData={getCrittersLeavingByMonth(critterWithDates, selectedMonth)}
          isImportantSection={true}
          critter={critter}
        />
      </div>

      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title={`Available in ${selectedMonth}`}
          critterData={getCrittersAvailableByMonth(critterWithDates, monthNameToNumMap[selectedMonth])}
          isImportantSection={true}
          critter={critter}
        />
      </div>
    </>
  );
};

/**
 * Returns the current month or the month specified in queryParams
 */
const getMonth = () => {
  const queryMonth = getQueryParam().month;
  const isQueryMonthInvalid = isNaN(monthNameToNumMap[queryMonth]);
  const date = new Date();
  const monthName = isQueryMonthInvalid ? date.toLocaleDateString("default", { month: "long" }) : queryMonth;

  return monthName
};
