import React from "react";
import { CritterTable } from "../CritterTable/CritterTable";
import { CritterTableHead } from "../CritterTableHeader/CritterTableHead";

export const ImportantFish = ({ importantFishData }) => {
  return (
    <div style={{margin: '20px 0px 20px 0px'}}>
      <CritterTable
        title="I'm leaving this month"
        fishData={importantFishData}
        critterTableHead={<CritterTableHead isSortableTable={false} />}
      />
    </div>
  );
};
