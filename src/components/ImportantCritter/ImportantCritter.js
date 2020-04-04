import React from "react";
import { CritterTable } from "../CritterTable/CritterTable";
import { CritterTableHead } from "../CritterTableHeader/CritterTableHead";
import { fishWithDates } from "../../data/FishData";
import { insectWithDates } from "../../data/InsectData";
import { getCrittersAvailableThisMonth, getCrittersLeavingThisMonth } from "../../data/utils";

export const ImportantCritterSection = ({ type }) => {
  const critterWithDates = type === 'fish' ? fishWithDates : insectWithDates;

  return (
    <>
      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title="I'm leaving this month :("
          critterData={getCrittersLeavingThisMonth(critterWithDates)}
          critterTableHead={<CritterTableHead type={type} isSortableTable={false} />}
        />
      </div>

      <div style={{margin: '20px 0px'}}>
        <CritterTable
          title="I'm available! Catch me if you can! >:)"
          critterData={getCrittersAvailableThisMonth(critterWithDates)}
          critterTableHead={<CritterTableHead type={type} isSortableTable={false} />}
        />
      </div>
    </>
  );
};
