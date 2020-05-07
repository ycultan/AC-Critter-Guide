/* 
 *  
 *  File: ImportantCritter.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useState } from "react";
import { Button, FormControl, Select, Input, InputLabel, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CritterTable } from "../CritterTable/CritterTable";
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
  formControl: {
    width: '100%'
  },
  button: {
    margin: '2px'
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    },
  },
};

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
        <FormControl className={classes.formControl}>
          <InputLabel>Month</InputLabel>
          <Select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {monthNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
