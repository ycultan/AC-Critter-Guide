/* 
 *  
 *  File: ImportantCritter.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React from "react";
import { CritterTable } from "../CritterTable/CritterTable";
import { fishWithDates } from "../../data/FishData";
import { insectWithDates } from "../../data/InsectData";
import { getCrittersAvailableByMonth, getCrittersLeavingByMonth, getQueryParam, monthNameToNumMap } from "../../data/utils";

export const ImportantCritterSection = ({ critter }) => {
  const critterWithDates = critter === 'fish' ? fishWithDates : insectWithDates;
  const [monthName, monthNum] = getMonth();

  return (
    <>
      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title={`I'm leaving end of ${monthName} D:`}
          critterData={getCrittersLeavingByMonth(critterWithDates, monthName)}
          isImportantSection={true}
          critter={critter}
        />
      </div>

      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title={`I'm available this ${monthName}! Catch me if you can! >:)`}
          critterData={getCrittersAvailableByMonth(critterWithDates, monthNum)}
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
  const monthNum = isQueryMonthInvalid ? date.getMonth() : monthNameToNumMap[queryMonth];
  const monthName = isQueryMonthInvalid ? date.toLocaleDateString("default", { month: "long" }) : queryMonth;

  return [monthName, monthNum];
};
