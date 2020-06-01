/* 
 *  
 *  File: ImportantCritter.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CritterTable } from "../CritterTable/CritterTable";
import { DropdownSelector } from "../DropdownSelector/DropdownSelector";
import { getCrittersAvailableByMonth, getCrittersLeavingByMonth, monthNameToNumMap } from "../../data/utils";
import { CritterDataContext } from "../../context/CritterDataContext";
import LocalStorageContext from "../../context/LocalStorageContext";

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
  const { fishWithDates, insectWithDates } = useContext(CritterDataContext);
  const { selectedMonth, setSelectedMonth } = useContext(LocalStorageContext);
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
      <CritterTable
        title={`Leaving end of ${selectedMonth}`}
        critterData={getCrittersLeavingByMonth(critterWithDates, selectedMonth)}
        isImportantSection={true}
        critter={critter}
      />
      <CritterTable
        title={`Available in ${selectedMonth}`}
        critterData={getCrittersAvailableByMonth(critterWithDates, monthNameToNumMap[selectedMonth])}
        isImportantSection={true}
        critter={critter}
      />
    </>
  );
};
