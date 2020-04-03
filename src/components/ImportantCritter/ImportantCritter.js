import React from "react";
import { CritterTable } from "../CritterTable/CritterTable";
import { CritterTableHead } from "../CritterTableHeader/CritterTableHead";

export const ImportantCritter = ({ importantCritterData, critterTableHeaders }) => {
  return (
    <div style={{margin: '20px 0px 20px 0px'}}>
      <CritterTable
        title="I'm leaving this month"
        critterData={importantCritterData}
        critterTableHead={<CritterTableHead tableHeaders={critterTableHeaders} isSortableTable={false} />}
      />
    </div>
  );
};
