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
import { getCrittersAvailableThisMonth, getCrittersLeavingThisMonth } from "../../data/utils";

export const ImportantCritterSection = ({ critter }) => {
  const critterWithDates = critter === 'fish' ? fishWithDates : insectWithDates;

  return (
    <>
      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title="I'm leaving this month :("
          critterData={getCrittersLeavingThisMonth(critterWithDates)}
          isImportantSection={true}
          critter={critter}
        />
      </div>

      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title="I'm available! Catch me if you can! >:)"
          critterData={getCrittersAvailableThisMonth(critterWithDates)}
          isImportantSection={true}
          critter={critter}
        />
      </div>
    </>
  );
};
